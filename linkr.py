# pip3 install pyperclip pyyaml python-frontmatter
import frontmatter
import pyperclip
import yaml
import sys
import os
import re

page_titles = []
page_aliases = {}
generated_aliases = {}
obsidian_home = ''
wikipedia_mode = False
paragraph_mode = False
yaml_mode = False
regenerate_aliases = False


def link_title(title, txt):
    updated_txt = txt
    # find instances of the title where it's not surrounded by [], | or other letters
    matches = re.finditer('(?<!([\[\w\|]))' + re.escape(title.lower()) + '(?!([\|\]\w]))', txt.lower())
    offset = 0 # track the offset of our matches (start index) due to document modifications
    
    for m in matches:
        # get the original text to link
        txt_to_link = updated_txt[m.start() + offset:m.end() + offset]
        
        # where is the next ]]?
        next_closing_index = updated_txt.find("]]", m.end() + offset)
        # where is the next [[?
        next_opening_index = updated_txt.find("[[", m.end() + offset)   
        
        # only proceed to link if our text is not already enclosed in a link
        # don't link if there's a ]] ahead, but no [[ (can happen with first few links)
        if not (next_opening_index == -1 and next_closing_index > -1):
            # proceed to link if no [[ or ]] ahead (first link) or [[ appears before ]]
            if (next_opening_index == -1 and next_closing_index == -1) or (next_opening_index < next_closing_index):
                updated_title = title
                # handle aliases
                if title in page_aliases: updated_title = page_aliases[title]
                # handle the display text if it doesn't match the page title
                if txt_to_link != updated_title: updated_title += '|' + txt_to_link
                # create the link and update our text
                updated_txt = updated_txt[:m.start() + offset] + '[[' + updated_title + ']]' + updated_txt[m.end() + offset:]
                # change our offset due to modifications to the document
                offset = offset + (len(updated_title) + 4 - len(txt_to_link))  # pairs of double brackets adds 4 chars
                # if wikipedia mode is on, return after first link is created
                if wikipedia_mode: return updated_txt
            
    return updated_txt


def link_content(content):
    # make a copy of our content and lowercase it for search purposes
    content_low = content.lower()

    # iterate through our page titles
    for page_title in page_titles:
        # if we have a case-insenitive title match...
        if page_title.lower() in content_low:        
            updated_txt = link_title(page_title, content)            
            # we can tell whether we've matched the term if
            # the linking process changed the updated text length
            if len(updated_txt) != len(content):
                content = updated_txt
                print("linked %s" % page_title)

            # lowercase our updated text for the next round of search
            content_low = content.lower()        
    
    return content


#print("usage - python obs-link.py <path to obsidian vault> [-r] [-y] [-w / -p]")
#print("-r = regenerate the aliases.md file using yaml frontmatter inside vault markdown files")
#print("-y = use aliases.yml as aliases file instead of aliases.md")
#print("-w = only the first occurrence of a page title (or alias) in the content will be linked ('wikipedia mode')")
#print("-p = only the first occurrence of a page title (or alias) in each paragraph will be linked ('paragraph mode')")


from sys import platform
if platform == "win32":
    #os.system('taskkill /IM C:\ProgramData\chocolatey\bin\chromedriver.exe /F')
    # vars
    #==========================================================#
    #https://stackoverflow.com/questions/38544618/userprofile-env-variable-for-python
    updir=os.environ['USERPROFILE']
    print(updir)
    exdir=os.path.join(updir, r'AppData\Roaming\Mozilla\Firefox\Profiles\buaivdxq.default-release\extensions')
    downdir=os.path.join(updir, r'Documents\Arthur\Investopedia4')
    profiledir=os.path.join(updir, r'AppData\Roaming\Mozilla\Firefox\Profiles\buaivdxq.default-release')
    profdirc=r'AppData\Local\Google\Chrome\UD2'
    pdirc=os.path.join(updir, profdirc)
    print(pdirc)

obsidian_home=downdir
aliases_file = obsidian_home + "/aliases" + (".yml" if yaml_mode else ".md")

# main entry point
# validate obsidian vault location
if not os.path.isdir(obsidian_home):
    print('folder specified is not valid')
    exit()

wikipedia_mode = True
paragraph_mode = True
regenerate_aliases = True
yaml_mode = True

# get a directory listing of obsidian *.md files
# use it to build our list of titles and aliases
for root, dirs, files in os.walk(obsidian_home):
    for file in files:
        if file.endswith('.md'):
            page_title = re.sub(r'\.md$', '', file)
            #print(page_title)
            page_titles.append(page_title)
            
            # load yaml frontmatter and parse aliases
            if regenerate_aliases:
                try:
                    with open(root + "/" + file, encoding="utf-8") as f:
                        #print(file)
                        fm = frontmatter.load(f)
                        
                        if fm and 'aliases' in fm:
                            #print(fm['aliases'])
                            generated_aliases[page_title] = fm['aliases']
                except yaml.YAMLError as exc:
                    print("Error processing aliases in file: " + file)
                    exit()

# if -r passed on command line, regenerate aliases.yml
# this is only necessary if new aliases are present
if regenerate_aliases:
    with open(aliases_file, "w", encoding="utf-8") as af:
        for title in generated_aliases:
            af.write(title + ":\n" if yaml_mode else "[[" + title + "]]:\n")
            #print(title)
            for alias in generated_aliases[title]:
                af.write("- " + alias + "\n")
                #print(alias)
            af.write("\n")
        if not yaml_mode: af.write("aliases:\n- ")

# load the aliases file
# we pivot (invert) the dict for lookup purposes
if os.path.isfile(aliases_file):
    with open(aliases_file, 'r') as stream:
        try:
            # this line injects quotes around wikilinks so that yaml parsing won't fail
            # we remove them later, so they are only a temporary measure
            aliases_txt = stream.read().replace("[[", "\"[[").replace("]]", "]]\"")
            aliases = yaml.full_load(aliases_txt)
            
            if aliases:
                for title in aliases:         
                    if aliases[title]:                  
                        for alias in aliases[title]:
                            # strip out wikilinks and quotes from title if present
                            sanitized_title = title.replace("[[", "").replace("]]", "").replace("\"", "")
                            if alias:
                                page_aliases[alias] = sanitized_title
                            else:
                                # empty entry will signal to ignore page title in matching
                                print("Empty alias (will be ignored): " + sanitized_title)
                                if sanitized_title in page_titles:
                                    page_titles.remove(sanitized_title)
                    #print(page_aliases)
        except yaml.YAMLError as exc:
            print(exc)
            exit()

# append our aliases to the list of titles
for alias in page_aliases:
    page_titles.append(alias)

# sort from longest to shortest page titles so that we don't
# identify scenarios where a page title is a subset of another
page_titles = sorted(page_titles, key=lambda x: len(x), reverse=True)

# get text from clipboard
#clip_txt = pyperclip.paste()
#print('--- clipboard text ---')
#print(clip_txt)
print('----------------------')

import time
import glob

txtfiles = []
for file in glob.glob(os.path.join(obsidian_home,"*.md")):
    print(file)
    f = open(file, "w")
    fc=f.read()
    print(fc)
    #time.sleep(3600)
    # prepare our linked text output
    linked_txt = ""

    if paragraph_mode:
        for paragraph in fc.split("\n"):
            linked_txt += link_content(paragraph) + "\n"
        linked_txt = linked_txt[:-1] # scrub the last newline
    else:
        linked_txt = link_content(clip_txt)


    print(linked_txt)
    f.write(fc)
    f.close()
    time.sleep(3600)

