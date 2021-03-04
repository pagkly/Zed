import frontmatter
import pyperclip
import yaml
import sys
import os
import re
import glob
#pip install pdf-to-markdown
import pdf-to-markdown

for file in glob.glob(os.path.join(obsidian_home,"*.pdf")):
    pdf2md pdf-to-markdown/examples/neihu.pdf
