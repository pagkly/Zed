	punctuator.py "C:\Users\user\Documents\Arthur\Demo-Europarl-EN.pcl" output.txt
welcome to introduction to programming

my name is Steven and my name is Sean

over the next 90 minutes we'll be taking

you through this series consisting of 21

different segments that hope to cover

the basics of computer programming which

can apply to any and all programming

languages you might want to learn we'll

be starting with the simplest question

of what is programming and from there we

will be working our way up as we talk

about common features of computer

science such as loops and arrays will

discuss how to read and write code debug

code that you've written some strategies

to help you plan out your code and much

much more the complete list of topics

that are going to be covered in this

lecture style video are shown on the

screen now additionally there will be

timestamps in the description so feel

free to skip around if you are already

proficient in some areas of computer

science or just want to know about a

specific topic we will be covering

hopefully by the end of the series

you'll have a basic understanding of

what computer science is along with an

armoury of useful skills that will help

you unravel

whichever programming language you

decide to learn first we'll only be

covering the major key points that apply

to all programming languages so we'll be

shying away from topics such as

object-oriented coding and command-line

navigation as those are things which are

language specific additionally there

will be no software required for you to

download in order to follow along with

this tutorial as we won't be writing any

code in an IDE to keep things simple and

concentrated this video is meant for

those who are interested in computer

science and programming but have no idea

where to start and have little to no

background information on coding and so

if that sounds like you then strap in as

Sean and I work our way through the

wacky world of computer science starting

with the biggest question probably on

your mind which is what even is

programming well the dictionary defines

it as the process of preparing an

instructional program for a device but

that's a really confusing definition so

in layman's terms what exactly does that

mean essentially it is attempting to get

a computer to complete a specific task

without making mistakes imagine this for

example you want your less than

intelligent friend to build a Lego set

except he has lost the instructions and

can only build based on your commands

remember though your friend is far from

competent and so if they are not given

very specific instructions on how to

build the set there are many mistakes

that they could make if he thinks like a

computer then if there is even one piece

that you have not told them specifically

where to place and how to place it the

entire Lego set will be ruined and you

will be left to suffer a complete mental

breakdown causing the whole goal of of

the project to be corrupted giving

instructions to your friend is very

similar to how programmers code instead

of a less than intelligent friend you

have a less than intelligent computer

and instead of instructions on how to

build a Lego set we are feeding it

information on how to complete a program

like a game or a web application an

important thing to note is that

computers are actually very dumb we

built them up to be this super

sophisticated piece of technology when

in actuality a computer's main

functionality comes from how we

manipulate it to serve our needs now

programming isn't as simple as giving

your friend instructions since in a

programmers case the computer doesn't

speak the same language as you the

computer only understands machine code

which is a numerical language known as

binary that is designed so that the

computer can quickly read it and carry

out its instructions every instruction

fed to the computer is converted into a

string of ones and zeros and then

interpreted by the computer to carry out

a task going back to the Lego example

this process would be like if he was not

only less than intelligent but to make

matters worse he could not understand

English and only speaks in Mandarin

Chinese in order to speak with him you

have to convert the instructions that

you understand in English into the

language that your friend understands

this process is essentially what you

must do for your computer in order to

make it understand the instructions that

you give it the big difference between

the two examples however is that it is

very difficult for people to understand

machine code in binary directly

translating what you want the computer

to do into machine code is extremely

difficult

in fact almost impossible and will take

a very long time to do it if you could

each program is composed of millions

upon millions of those ones and zeros so

how exactly are we supposed to translate

our instructions into machine code this

is where programming languages come into

play

programming languages are fundamentally

a middleman for translating a program

into machine code these languages are

much easier for humans to learn than

machine code and thus are very useful

for programmers going back to our Lego

example a programming language would

sort of be like an interpreter that's

able to take the instructions you give

them in English and translate them into

instructions your non-english speaking

friend can understand this makes

programming languages extremely useful

and the backbone of any good program

think of programming languages as not

English and not machine code but

somewhere in the middle there are many

different programming languages out

there that each have their own unique

uses languages such as Python and Java

act as general-purpose languages that

can perform a variety of computational

tasks while robot C or HTML or CSS our

language is designed for more specific

purposes such as moving a robot or

constructing a website languages can

also vary in how powerful they are

for instance javascript is a scripting

language that is designed for smaller

tasks or Java or Python and carry out

much more computationally taxing

processes we can measure a programming

languages power or level by how similar

it is to machine code this series of

zeros and ones we talked about earlier

low-level programming languages such as

assembly or C are closer to binary in a

high-level programming language such as

Java or Python the basic idea is that

the lower the level of your programming

language the more your code will

resemble what the machine can interpret

as instructions aside from the different

purposes that each language fulfills

choosing a language typically comes down

to a matter of preference as are usually

many languages that can accomplish

similar tasks try different languages

and decide which ones rules interface

and level of simplification you like

best

so now that we know what programming is

how do we actually write code it's not

like we can simply type words into a

text document and automatically assume

that the computer can translate it into

machine code read it and carry out a

task like opening up a browser and

additionally we can't just write down

rubbish in certain programming languages

mentioned in the previous segment and

expect the computer to understand so how

are we supposed to write code then well

the answer is with an IDE an IDE which

stands for integrated development

environment allows the facilitation of

code by a computer

i des provide a graphic interface on

your computer in which the programmer

can easily write run and debug code

without having to worry about problems

with complication or interpretation of

the program think of an IDE as any other

program on your computer such as a game

a browser or even the File Explorer

except we'll be using it to write code

IDs are able to turn your code into

machine code and run it through the

computer to produce results in addition

to providing a place for programmers to

develop their code IDs provide some

extremely useful tools for programmers

to ease the job of writing code such as

built-in error checking because as we'll

talk about later code doesn't always run

correctly auto-filling for frequently

used words or phrases and a project

hierarchy which will help you organize

and manipulate the files within your

project back in the olden days before I

des Code used to be written on punch

cards and then fed into computers which

would take hours and cause a lot of pain

IDs nowadays act as sort of a fast-track

to writing code and make things a whole

lot easier for programmers an example of

a specific IDE can be seen on your

screen now in the center you can see the

program that is currently being written

and right below it is the console which

can print out useful information for the

programmer this specific IDE is used to

write Java code IDs are extremely

powerful and will be used in almost a

hundred percent of your programming

projects so through these ideas we are

finally able to write and compiled code

smoothly without worrying about the

computer not being able to understand it

the next problem we run into then

becomes how do we write this code in the

IDE because it's not like we can just

type random words from a certain

programming language and expect the

computer to understand this is where a

programming languages syntax comes into

play now just as if you were learned in

a real language learning a computer

language can be very similar some have

different style

that may seem odd some may make you use

weird or abstract concepts which may be

confusing and like all languages

programming languages have a set of

rules that you must follow when writing

code in that language and at the

forefront of those rules is grammar

programming grammar is referred to as

syntax and is very similar to real-world

grammar each programming language has

its own syntax or rules that you have to

follow to a tee if you want your program

to run correctly just as if you were

speaking in real life these can be

things such as how you type out certain

functions what you put at the end of the

line of code and how you set up certain

functions each language is unique in its

syntax and while some may share similar

rules all will have some quirk which

makes it stand out from the rest

syntax is something that catches a lot

of people off-guard

since many expect every programming

language to follow the same set of rules

but as we spoke about in the last

segment because each language is

specialized for a specific task each

needs its own set of rules to function

breaking or disregarding these rules

will result in an error just how

breaking or disregarding rules in real

life will result in an unintended

message as an example if you wanted to

do something simple such as initialize a

variable which is something that we

haven't covered yet but the example is

still relevant in Java you'll notice how

we have to specify what type of variable

we are defining in this case an integer

and also at a semicolon after the

statement in Python we don't even need

to define that we are trying to create a

variable and just have to type what we

want to create and in JavaScript we just

specify that we are making a variable

but we don't include what type of

variable we want to make like in Java

even in this simple example you can see

how much of syntax matters when learning

a new language since while the goal of

our program remain the same which was to

define of the integer with the value 3

all the programming language is shown

took different approaches all these

languages require that you follow the

syntax because remember computers are

extremely dumb if you forget one

semicolon or misplace a character the

entire program will not run and send you

back a syntax error which is something

we'll talk about later think of this as

if you forget a comma in a sentence and

the entire context of what you're trying

to say gets misinterpreted for example

and the sentence let's eat grandma if

you were to forget that comma while it

may seem like a small mistake it changes

the entire context of the sentence

making it sound like you're going to eat

your grandma the same rules follow for

programming if you forget a semicolon

the entire context of your program could

be corrupted and misinterpreted by the

IDE now another thing which makes IDE so

useful is that they will let you know if

and when there are syntax errors in your

code syntax errors of course being in

parts of your code which do not follow

the same rules what we talked about

previously the IDE will tell you where

in your code the errors and also won't

let you run your program until the error

has been fixed because of how important

syntax is to writing code and learning a

new language it's recommended that you

learn the rules and syntax of a language

before beginning to write complex

programs in that language most of the

rules are tedious to learn but easy to

master and as soon as you can do that

you'll be able to easily identify syntax

errors and take care of them easily and

be writing code in no time that covers

the basic gist of syntax and programming

rules so now that we know how to write

code and the where to write code we next

need to cover what happens after we have

typed out a program and run our code

because writing a piece of code for a

game or for databases is cool and all

but after the computer interprets the

program how will we know what's

happening and whether or not is working

well programmers do this by looking at

the console the console is a text

interface within your computer that US

programmers can use for a variety of

different purposes if you remember a

short while ago we showed a picture of a

basic IDE and one of the main parts of

the picture was the console the main use

of the console is to output text from

the program this is usually done by

using a print statement a print

statement is a command that does exactly

what it sounds like it prints text to

the console the print statement is the

first piece of actual code we've talked

about in this series and it's about as

simple as a kiss the purge statement

despite its simplicity is one of the

most important functions in programming

and exists in some form in just about

every programming language the most

basic thing you can ask the press

statement to do is to just simply make

it say something this is done by

instructing the console to print and

then include wherever you want to be

printed inside the parenthesis for

example in Python the segments of code

print hello world will cause a message

reading hello world to appear out to the

console pretty neat the print statement

is also vital for view

interpreting the computer's output from

program for instance if you could tell

the computer to run a simple calculation

for example to determine what four plus

three is it will run the program

internally and compute and answer

however what is the purpose of having

the computer run this program if you

were not be able to tell what the result

is instead of simply tell them the

computer to perform this calculation

instruct the computer to print the

output of the program to the console and

prime the program's completion seven

will appear on the console as you can

see the console loves to easily print

information out to the developer for a

variety of uses it is important to note

that the print statement varies

depending on the programming language

being used for example in Java there are

multiple versions of the print statement

depending upon whether you would like a

line break after the project text or not

as well as specialized print statements

which make your code run more

efficiently also the general syntax of

using a print statement and certain

nuances of its function contains between

languages

however you can generally rely on it to

carry out the same overall function as

it is foundational statement for

programming in general all of its

functionality makes the print statement

along with the console a very useful

developer tool however it is important

to remember that that is all it is in

the developer tool the console is not

really meant to be viewed by the end

user of your program it tends to be

hidden away behind the scenes and other

methods of displaying information such

as displaying text graphics or images

are used to convey information to the

user instead think of it like this when

you are using your phone you see the

console and none of the programs you use

so while you can use the console to give

yourself information about how your

program is performing don't try to

implement it in the final product

because it fundamentally just isn't

meant for that overall remember to use

the console to its fullest extent

when writing and fixing problems in your

programs as it is a great tool to use to

tell how your program is performing

behind the scenes

so now that we know a bunch of

information about programming languages

and how and where to write them along

with the print statement under our belts

let's go over some intuitive things that

the computer can do all by itself

without you having to tell it how to

more specifically we'll be covering some

basic number mathematics as well as

string math starting off with basic

mathematics the computer already knows

how to do simple arithmetic this

includes addition subtraction

multiplication and division all of which

are represented by the symbols shown on

the screen now in any IDE that you may

install you'll be able to print out the

answer to simple math problems using the

print statement which may seem

counterintuitive because why would you

use the computer to do math when you

have a perfectly good calculator on your

phone if you have to remember that

computers are dumb and anything we want

a computer to do we have to build up

from scratch basic arithmetic while

simple helps out in almost any program

you may write for example if we wanted

to build a basic calculator app we'd

need to utilize this functionality in

order to correctly display the answer to

an arithmetic problem when our user

tries to add subtract multiply or divide

two numbers now in addition to the four

basic math equations most programming

languages include an additional operator

known as modulus if this is your first

time hearing this word don't worry since

it's not usually taught in math classes

modulus allows us to get the remainder

of a divisional operation for example

when we take 10 modulus 3 we are

essentially telling the computer to take

10 divided by 3 ignore the actual answer

and just give us the remainder of the

operation in this case 1 since when we

divide 10 by 1 the answer is 3 remainder

1 the 1 in this case is what gets

printed out to the console if there is

no remainder say in the case that we

take 50 modulus 2 since the remainder is

0 the function would return 0 if we were

to print it out to the console this can

be extremely useful in many cases the

most obvious being if we want to

determine whether or not a certain

integer is even or odd if we take a

certain number modulus 2 and ever turn 0

then we know that is even because any

number divided by 2 will always result

in a full answer without a remainder

but if the system returns one then we

know that the integer is odd you will

find yourself using the basic math

operators a lot more than you think

so it's good to keep them in mind when

writing your program now not only can

our computer work with numbers but it

can also work with strings strings by

the way are just another way to say

texts for example hello world is a

string the letter A is a string and

anything enclosed by quotation marks is

denoted as a string in programming

languages we'll cover more about strings

in a bit when we talk about variables

but for now let's continue we already

talked about printing strings to the

console well let's say we're making a

game and we wanted to print out the

statement game over for was your final

score now while we could just make a

string that says that exact phrase and

print it out to the console in some

cases it would be more useful to print

out the actual integer value especially

in the case of a game where the score

can change each time you play because

score definitely isn't always going to

be 4 well we're also able to print out

multiple strings of text and even

integers by adding them together in the

print statement this is known as

concatenation continuing with our scorer

example if we wanted to print out the

statement game over for was your final

score using 4 is an integer rather than

a string we could do this by breaking

down the statement into two strings and

an integer like so print game over plus

four plus was your final score

we of course begin with the print

statement which again will be different

across all languages but in this case

we're using Python inside the print

statement we start off by printing the

string game over now here comes the

important part from there we use a plus

sign and add four to the print statement

just like if you were adding two numbers

then we can repeat this process with

another plus sign for the final string

was your final score and we're able to

print out the entirety of our statement

easily doing this we can easily print

out multiple different strings and

integers together in one print statement

we could also combine the two lessons

we've learned thus far and do something

such as game over plus four plus four

plus was your final score in the case

let's say where you have a

which gives you a base score and then

four points for a certain task that you

completed this demonstration also

displays another important part of

programming which is that oftentimes to

get your program to be the most

efficient you have to combine aspects of

code now it's important to note that the

computer will take whatever you put in

the parenthesis and print it out

character for character so oftentimes

programmers will forget to add a space

onto the end of their strings this can

result in a small mistake in which the

string from the previous example would

be printed out as if to say game over

for was your final score which isn't

that appealing when displayed on the

screen to the user so it's a good

practice to always put a space after and

before your strings to make sure this

doesn't happen and your string doesn't

end up like that another important thing

to note is the difference between four

in quotation marks and four without

quotation marks now four in quotation

marks is treated as a string rather than

a four without quotation marks which is

treated as a number this may not seem

like a big deal but again computers are

dumb and if you try to do math with a

number in quotation marks it will return

an error because the computer doesn't

understand that you're trying to perform

the operation on a number and it thinks

you're trying to add an integer to a

string which is a big no-no in

programming when you're adding numbers

so when you're programming make sure to

make a mental note of whether or not you

want to make something an integer or a

string because that type of stuff it

makes a big difference all right that

concludes our segment on the base power

of computers now next up we're going to

be covering one of the most important

components of computer science so make

sure you pay attention because next up

we're going to be discussing variables

what they are and how we use them first

of all what exactly is a variable a

variable is simply something that can

store information and can be referenced

and manipulated think of variable is

like a cardboard box cardboard boxes a

service means to store items in them

which can be change that replaced and

modified variables are like cardboard

boxes that store information for the

programmer to reference or manipulate

each variable simply has a type a name

and a piece of information stored inside

of it the type of piece of information

will be covered next and the name is

simply a name for the variable think of

it as writing out a label on the

cardboard box in sharpie

now there are many different types of

variables that a programmer can use but

right now we will just be covering what

are called primitive variables which

include integers bullying's

floats and doubles strings and

characters we'll start off by talking

about in integer an integer or int for

short is as simple as it sounds a

variable that can store an integer value

this includes all whole numbers from

negative 2 billion 147 million 480 3648

to 2 billion

147 million 480 3648 notice how I said

whole numbers entered values can not and

will not hold any decimal values so keep

that in mind when using variables

secondly is a boolean a boolean is very

primitive variable which can store a

value of either true or false boolean

variables can only hold these two values

and are extremely useful for conditional

statements which we will cover soon the

next two types of variables are floats

and doubles both of these variable types

are floating-point data types which

essentially means that these variables

can store numbers with decimal places

where as integers values cannot hold

decimal values floats and doubles can

the main difference between the two is

that a float variable can store numbers

of our precision up to 32 bit while

doubles can store numbers with a

precision up to 64 bit essentially a

double can store more decimal places

than a float so it all comes down to how

precise you want the variable to be up

next we have string variables which are

like the strings we've talked about

beforehand except store somewhere in a

value string variables can store strings

of letters which are just words and

sentences strings are useful for

displaying text and storing input

information strings can also be

concatenated together to form

combinations of string variables and

pre-written strings this can be very

useful for outputting information in a

readable format for the user and for

example imagine we have a string called

name the code asks for input and stores

that string of text in name to output

this information to the user rather than

simply displaying their name you can add

the phrase your name is and make it into

a sentence by concatenating your name is

plus name plus a period this makes it

easier to read your code while also

adding variability to your code which

always makes things more interesting for

the end user

finally we have char variables

our stands for character and just as the

name suggests they can each hold one

character this is useful when a

programmer wants to read one button

press or one character in a string

without using a string variable a

specific example is being a game that is

controlled by the keyboard the program

needs to recognize the character that is

pressed and translate that into carrying

out some function now strings can also

hold one character but chars can't hold

more than one character so keep that in

mind when defining variables now why are

variables so useful well being able to

store information in a format that can

be easily referenced later is essential

for any good program oftentimes in code

you're going to want to keep track of

things such as a user's name or score

and so by creating a variable called

name or score you can store this

information in the variable and then

reference it add to it or modify it

also many times the program will want to

take input from the user which cannot be

pre-programmed into the code and thus a

variable is required to store the

information a program may also rely on

factors that will change as the program

progresses in which case a variable is

once again required also taking these

variables and manipulating them is quite

necessary for carrying out many of the

tests you want a program to carry out

for instance multiplying in variables or

concatenating string variables over all

variables are the backbone of any good

program and you'll find yourself using

them often if you want to clean an

efficient code so it's best that you

learn what types of variables you need

to use and win so now that we know all

about the different variable types and

we've talked about them a little bit

we're gonna delve further into what

happens when we actually define create a

variable how we reference them and how

we can manipulate them for our programs

to start let's go over what happens when

we actually define a variable now when

we write a line of code which

initializes a variable and that code is

executed the computer essentially

creates a little space in memory that

stores your variable name and its

contents so that it can be referenced

later going back to our cardboard box

example from the previous segment think

of this as if you had your own storage

facility and you make a new cardboard

box labeled name and inside of it you

put a piece of paper with the word

nullpointerexception on it now anytime

you want to know the contents of your

name box you could simply look inside

and see that it has the contents

nullpointerexception

this is what the computer does except

this storage facility is the memory

your computer the box is a variable and

the contents of the box are whatever the

variable is set to be equal to anytime

you want to know the contents of the

name variable you can simply call it and

the computer will pull the information

that is stored in that variable and use

it how the users see fits another thing

to note really quickly is that you can

actually make a variable without putting

information inside of it this would

simply be like if you built up a new

cardboard box gave it a label with a

sharpie but just didn't put information

inside of it you're simply saving that

space in your storage facility for later

this can be maybe because you want to

store information in it later down the

road or if you're going to use it to

store information given to you by the

user in which case you can't give it

information since you don't know what

the user will input just a note that if

you try to reference or point to a

variable which does not have any

information in it you'll get what's

known as a nullpointerexception which

despite being an amazing name for a

youtube channel is something you

generally want to avoid when programming

now programming languages allow us to do

some pretty cool things with these boxes

that we've created for example let's say

we created a second variable called

channel name and instead of setting it

equal to null pointer exception we

instead set it equal to our already

created named variable this doesn't

create a space in memory for this new

variable however it simply points the

same location of memory we have already

created for the name variable going back

to our storage facility example this

would be like instead of creating a

whole new box labeled channel name and

storing a sheet of paper with the word

nullpointerexception on it we instead

simply added another label below the

name box entitled channel name now we

have two variables which point to the

same contents that being the string

nullpointerexception

we usually do this to save space in our

code for things that we know are going

to have the same value variables can

also be updated throughout your code for

example let's say you add an age

variable and inside of it was the

integer 17 then you celebrated a

birthday and wanted to update your age

all you would have to do is reference

the variable and set it equal to

whatever new integer you want the

to hold in this case 18 this would be

the same as having a box labeled age

with a sheet of paper reading 17 inside

of it and then taking that piece of

paper out erasing 17 replacing it with

18 and then placing it back in the box

doing this we are able to easily update

the contents of our variables throughout

the code as things dynamically shift as

another example if you are making an RPG

your character would likely have stats

such as attack defense mana etc as a

game progressed you could continuously

update the variables so that the player

could get more powerful the further

along that they went through the game

and you wouldn't have to create new

variables you would simply need to just

keep grabbing that box from your storage

facility erasing and replacing the

numbers on the piece of paper and then

continue along with your code just keep

in mind that these variables are nothing

more than places in memory and which a

certain value is stored so we can easily

update the numbers and their place will

remain constant after the code has run

its course the place in memory is

deleted until you run the code again and

the program dedicates space for the

variable again each time you run the

code you're making new boxes in your

storage facility and at the end of the

code you destroy them all to make room

for the new boxes next time another cool

thing you can do with integer float and

double variables is add them subtract

them divide them multiply them and even

modulus them for example if you are

making a calculator app and you store

the first number the user entered as

number one and a second as number two

you could then multiply num1 and num2

together and now they're print them or

soar them in a new variable entitled the

result then each time you run the

program the user could input new numbers

into the num1 and num2 variables and

they would simply be set to those new

integers that the user inputted and

returned the result that corresponds to

those specific numbers this allows you

to keep easy track of which numbers are

which and what's going on in your

program which is extremely useful also

while you cannot subtract multiply

divide or take the modulus of strings

you are able to add them like we said

previously let's say you add a string

str1 with the contents hello and a

string str2

with the contents there you could add

str1 and str2 to create a string that

the head the contents hello there either

storing it in a third variable or

printing it out to the console the last

topic we'll be covering on the topic of

variables is the naming conventions of

variables which albeit may seem odd but

it's extremely important when trying to

read your code so we'll be covering it

now now variables have to be one

continuous string and so if you wanted

to make a variable that stored the

players score you'd have to find some

way to combine the words player and

score since you can't have the phrase

player score be the name of a variable

all programmers have their own personal

preference when it comes to naming

variables but the one we'll be using in

this lecture is called camelcase

which is the process of not capitalizing

the first word but capitalizing every

word that follows it going back to the

players core example using the camelcase

method the variable would be called

player score this allows us to easily

see and identify each word and becomes

really useful for long variable names

like the player's score before the final

boss whereas if we just type it out

without camelcase

it would be really confusing and hard to

read this will help you out a ton when

we start finding bugs in our code and

need to quickly scan through our program

to figure out what is wrong and adds to

the overall readability of the program

other programmers might use different

naming conventions like using

underscores to separate the words in a

phrase but for now in this series we'll

be sticking with camelcase

next we'll be moving on to conditional

statements which at their core are

statements that change the path of our

code depending on certain conditions for

the sake of keeping things simple for

this section red lines will connote that

our code will not be following the

specific path in green lines will mean

that our code is following the path

the main type of conditional statement

that programmers use is the if statement

and this will show up countless amount

of times in any program you write it is

as simple as it sounds if some condition

is true and usually that condition will

be enclosed by braces then carry out the

instructions located within the if

statements brackets else do another

thing now brackets are used in most

programming languages to indicate a

segment of code which will run it works

like this if the condition in

parentheses is true then all of the code

contained within the brackets will run

and if the condition within the

parentheses is not true then it will

skip over all the statements within the

brackets a quick note is that while this

is the case with most programming

languages some like Python use columns

and whitespace to determine where a

piece of code starts and ends but for

the sake of this series we'll be using

curly braces now the condition within

the parentheses can take on thousands of

different forms such as if the value of

the string variable name is equal to

Steven or if the player's score stored

in an int variable is greater than 5 the

list goes on and on each of these

statements is evaluated as a boolean

which you will remember from when we

talked about variables is either true or

false

if the boolean is true we run the code

inside the curly braces if it's not we

pretend everything inside the curly

braces never existed and move on with

our code the if statement comes with two

more additional statements that can go

with it

else if and else else if is a

conditional statement used directly

after an if statement and carries out

mainly the same function as an if

statement however the else if statement

will only be evaluated if the preceding

if or the preceding else if the

statement is bypassed due to each

condition being false so we would run

through it like so if something is true

we would run the code inside of that

statements curly braces helps if that

something is not true but another

statement inside of the parentheses is

true we would then run that code segment

and if neither of them are true we would

skip both segments of code and move on

in our program this can be a hard

concept to wrap your head around so

do an example if we had a program that

evaluated the if statement if age is

equal to 10 we could then have a

statement under that which stated else

if age is equal to 12

now if the age variable was 10 which we

can see from the example that it is then

the code immediately following that

conditional statement in the brackets

would run the ELSA statement we made

will not even be tested since we know

that it is going to be false and thus

the print statement inside of that

conditional statement Break its will be

ignored and the code will move on to the

rest of the program now for example

let's say we change the age variable to

be 12 instead of 10 now instead of the

first conditional statement being true

it actually evaluates as false since age

is no longer equal to 10 so what we do

now is first skip over the print

statement which prints out that ages 10

since it's not and then we evaluate the

else if statement we check if age is

equal to 12 which again it is and so now

we run with all the code inside of that

conditional statement before finally

moving on to the rest of our program so

as a review we check the initial if

statement if it's good then we run all

of the code within that if statements

curly brackets and move on with our

program if the initial if statement is

not true we then move on to any else if

statements and evaluate if those

conditional statements are true where

you have as many else of statements as

we want although this could lead to

clutter amongst your code so we'll talk

about some alternatives later to help

this out now that takes care of the

if-else statement so now we'll move on

to the else statement the out statement

once again it comes after an if or an

out if statement and we'll carry out its

instructions no matter what as long as

the preceding statement / statements are

evaluated as false if we went back to

our previous program we could add an

else statement which would only have the

code in his brackets run at the age

Virgo wasn't 10 or 12 this will catch

all cases of the program that didn't fit

into our parameters it's a good practice

to always have an else statement at the

end of your conditional statements to

catch any weird cases that make him up

in your program now remember back to the

fact that we could have thousands of

else's statements after a while that can

get pretty cluttered and so another very

useful conditional statement which helps

circumnavigate this problem is a switch

statement a switch statement is

functionally similar to many if and else

if statements together you write a

switch statement in the form of switch

variable and then below that you write

out how many cases the variable could be

for instance if we were to switch var

and then under way to write out five

cases that the variable var could be and

the

the instructions listed under each case

will be carried out if the very variable

would be equal to that case now switch

statements are different since instead

of using brackets they use a column to

signify the start of a set of

instructions and a break statement to

end them this is very useful because you

are able to essentially use many if and

else if statements without having to

write nearly as much in switch

statements you just always have to

remember to include a default case at

the bottom of the expression to denote

any and all cases that don't meet the

above requirements this simply catches

all the inputs that don't fit within the

program's main cases it's very similar

to read out case at the end of an MPhil

chain now why are these statements so

useful well many times programmers want

their programs to function differently

depending on different conditions for

instance a program could function

differently depending on the information

that the user inputs such as allowing

user to use the program or not use a

program if they are above or below 18

years old respectively

or in say a video game if the users

experience is above a certain threshold

we might want to get them harder a punch

to battle another example could be a

program which changes the color scheme

depending on the time of day or even

more simply if a user presses a button

that is meant to move on to another

screen in an app the programmer would

only want that app to change screens if

the user clicks that button a program

without conditional statements will do

the same thing every time and would be

very primitive compared to one that can

change depending on some conditions so

now that we know how to make and use

variables how to compare them and what

we can do with those comparisons let's

move on to another foundational concept

of computer science and that is arrays

now we've already talked about variables

and how great they are for storing

singular bits of information for making

our code more simplistic but one of the

biggest drawbacks that comes with

variables is their inability to hold

more than one piece of differing

information for example let's say you're

making an app which allows a user to

create a grocery list well there's no

real easy way to create lists using

variables because it's not like you can

have one variable store the names of 6

or 7 different food items remember we

can only put one piece of paper in our

cardboard box no more and besides even

if you were able to add multiple items

to one string variable you would still

have a lot of trouble doing simple tasks

you might want from a list such as

searching through it splitting it or

even deleting items from the list when

you're done with them

this is the problem that using arrays

solves for us an array is as you may

have guessed by now a list you can have

an array of integers and array of

strings and even an array of other

arrays which is something we'll cover in

a minute programmers use arrays when

they want to store a lot of variables

containing information that is all

related to each other such as a grocery

list or a high score list in a game

think of arrays is a column in Excel or

Google sheets you have the title at the

top and then below it are a bunch of

bits of information which all relate

back to the title arrays are super

useful when programmers want to store a

lot of information that can be easily

searched through because programmers

have developed methods of breaking down

and using a race to find specific

information in arrays full of thousands

of different variables I have an example

to show just how useful arrays are let's

say you're a startup company that owns

an app that has a hundred thousand users

every time a user wants to create a new

account they input the username they

want and then your program will have to

check to make sure the account name

hasn't already been taken doing this

requires you to search through the

information of all 100,000 of your users

to see if that username has it account

with your service an array would be able

to contain all of this information and

make it easy to search through and find

out if the account name has already been

taken with little to no delay now the

single most important thing to note

about arrays is how you reference each

element of the array within them let's

create a basic array called numbers and

inside of it put the digits 1 through 10

now when we want to refer to each cell

in this array we would call upon its

index in index is just a fancy way of

saying that numbers placed within the

array now you would think that the first

integer in this array would be the first

index the second would be the second

index and so on but that's simply not

the case

in computer science programming

languages refer to the first cell as the

zeroth element in the array this means

that if we were talking about our new

array of numbers we just made the number

four would actually be in the third

index five would be in the fourth and so

on so instead of starting our count from

one we start from zero it's extremely

weird and confusing but it's one of

those programming quirks you're gonna

have to memorize and commit to memory if

you were to not follow this nomenclature

and refer to the last element in this

ray as the tenth you get what is

referred to as in a ray out-of-bounds

error since you're trying to reference

the tenth element but there is no tenth

element or you're actually trying to do

is reference the ninth element another

extremely important thing to note about

arrays has to do with their size when

you initialize an array you can do it at

either one of two ways you can either

populate it with the elements that you

want contained in the array right then

and there creating and filling the array

at the same time or you can define how

many elements you want the urate to hold

essentially the arrays size and then

populate it with elements later this is

because when we initialize an array it

creates a space in memory that has the

size of exactly what you give it no more

and no less this is great for when we

want to access elements in the array

because we can do so incent aeneas ly

because the computer knows exactly where

in memory the array is stored but the

one downside is that we can't increase

the size of the array later on all array

sizes are final think of this like

setting up a bookshelf with books by

populating a bookshelf with a certain

number of books and then moving on and

filling the next shelf with different

books we have no way to go back and add

books to that first shelf without

shifting everything over once we decide

how much space to dedicate for an array

in this case there's no way to add more

space once again because this is

extremely important to remember this

means that once an array has been

defined there is no way to change the

size of it if you have an array titled

names with a size of 8 then you try to

add another name to the array you will

receive an error so be careful when

messing around with array sizes of

course you can always go back to the

start of your code when you initially

make the array and allocate more space

to it increasing its size if you find

out that you need more space to hold

items but once it's defined you cannot

change its size through conventional

methods another small thing I want to

touch upon really quickly is that when

you initialize an array you must

determine which type / array it is right

then and there for example you have to

specifically say it will be an array of

strings or integers when defining it and

also you're not allowed to mix and match

meaning that you can't have an array

full of integers with a few strings and

summed up

was thrown into the mix they all have to

be the same type now the last thing

we're going to cover on arrays is a

little funky and that is the practice of

putting a raise inside of a raise if you

make an array of a raise it is referred

to as a 2d or two-dimensional array

think of these as matrices if you have

taken in the algebra class before now if

you haven't think back to our Google

sheets example but instead of using

columns we would add rows as well so now

each element in an array would simply

just be a string variable or an integer

variable but an entirely new array with

its own set of values and elements the

way we index these is mostly the same

except we would have two numbers two

index instead of one we start with the

row and then the column so a number in

the position 0 2 would be in the first

row 3 columns down in this case the name

Clint a number in the position 1 1 would

be 2 rows down and 2 columns across in

this case the name Chris you get the

idea now you can also make 3 dimensional

arrays by putting an array inside of an

array inside of an array but that's a

little above what we're going to be

covering so I'm going to cut it off

there next up we're going to be talking

about loops so what exactly are loops

next up we're going to be talking about

loops so what exactly are loops next up

we're going to be talking about loops so

what exactly are loops next up we're

going to be talking about loops so what

exactly are loops next up we're going to

be talking about loops so what exactly

are loose well as you could probably

tell by that statement right there a

programming loop is a statement that is

used to run certain instructions

repeatedly just like how the opening

statement of this topic was repeated

five times loops are very useful for a

variety of reasons for instance imagine

you want to print something 15 times

sure you could just copy and paste a

print statement 15 times but this is

really annoying to have to do it becomes

even more unrealistic when that number

goes up to say 100 or so now what if

instead of rewriting the same

instructions over and over again you

would simply place the print statement

inside of a loop and it will occur as

many times as you would like

now that's the power of loops with loops

were able to repeat parts of code

multiple times now there are three

different types of loops that we will be

discussing today and that first is the

for loop a for loop is very useful for

situations like the one described above

where you would like to carry out a sort

set of instructions in numerous times

the syntax for a for-loop varies

depending on the language however it

usually consists of three parts an

integer value a condition which the

integer value must meet in order to exit

the loop and an operation to modify the

integer value at the instructions inside

of the loop are completed each time the

for loop runs the operation you said

will be performed on the integer as long

as that integer still meets the

condition you set usually being greater

than or less than a constant value the

for loop will continue to run eventually

when the integer has been modified by

either increasing or decreasing it to

the point where no longer meets the

condition the for loop will terminate

and the code will continue to run for

example the Sarah integer value is I and

we set it equal to zero then we set the

conditional statement as I being less

than three so basically we're saying

that as long as I the variable we just

created is less than three continue

running the instructions contained

within the loop finally we make the

operation I plus plus meaning each time

the loop runs we will increase it by one

and inside of the loop let's just put a

simple print statement now let's run

through the for loop we start with I

equals zero zero is less than three so

we enter the loop and pronounce I'll

world now that the instructions are done

we add one two I'm making it one moving

on one is again less than three so we

want to get into the loop and print out

hello world again we had one two I'm

making it two now two is still less than

three so we headed the loop again in

print out hello world finally we add one

to it once again and it becomes 3 3 is

not less than 3 though it is equal to 3

and so we don't enter the loop and it

terminates moving on to the next segment

of code this is a simple example but you

can extrapolate it across the

programming to fit your needs now we're

using a for loop you have to make sure

to set up a condition that given the

initial integer value and operation well

at some point not be met to avoid

creating an infinite loop and crashing

your program an infinite loop occurs

when you give a for loop a condition

which will always be met given the

parameters of the program and so the

software it crashes for example a for

loop beginning at 10 and checking if I

is over less than zero and then adding

one two I at the end of the loop will

never terminate since I will suggest

increase infinitely after the for loop

is the very similar for each loop a for

each loop or a for in a list loop in

Python is used for iterating through

arrays or lists essentially though it

will go through each element in

the array and carry out some set of

instructions for each value if you would

like to read all of the elements in an

array and compare them to some value or

perform some operation on them a for

each loop is extremely useful so for

example we could have a for each loop

which iterated across an array and

simply printed out the value of each

array location next up we have the while

loop a while loop will continually carry

ops instructions while conditional

statement given to it is true this can

be as long as a certain variable is true

as long as it numbers less than another

number or while a value is still equal

to another value for example while loops

are different than for loops and that

the loop is not contained within one

statement but stretched out and will

continue to run as long as this

condition is true like a for loop you

could make the condition such that it

will eventually return false and exit

the loop however while loops will not

crash your computer should you create an

infinite loop in fact it is very common

for while loops around infinitely as for

certain programs you would like the

program to continually be iterated

through instead of running once all the

way through until you exit out of the

program when programming a game for

instance a while loop would be used to

iterate through your code continually

refreshing the screen as the game runs

from there you can perform operations on

the screen to make the game playable

creating an infinite while loop could be

done by simply using the syntax while

true as the condition true will always

be evaluated as true finally I'd quickly

like to cover the extension of a while

loop the dowhile loop do-while loops are

very similar to while loops except they

will carry out their instructions at

least once even if the condition is

false and then will carry on like a

basic while loop essentially the

conditions inside of the loop will run

at least once and then if the condition

is still met they will run again and

function as normal while loop would as

you can see loops in there many

varieties has some extremely useful

functions using them you're able to

perform an operation many times in a row

you can iterate through arrays and lists

and overall decrease the clutter of your

code

next up we're gonna be taking a break

from learning about common programming

statements and dive into what happens

when the code we write doesn't work more

specifically we'll be covering the

different types of errors that can occur

when you're programming and what causes

them now when you're writing code you

have to understand that things aren't

always going to go the way you expected

them to and sometimes the program

doesn't always work as you hadn't

intended it to

we programmers call these errors and

while annoying they're always going to

come up in computer science and so it's

best to learn what they are and how to

deal with them often referred to as bugs

errors and scripting languages can be

narrowed down to one of three types

syntax errors runtime errors and logical

be covering in today's video to kick

things off let's talk about syntax

errors these are usually the easiest of

the three to solve since they are

oftentimes something that can be fixed

within seconds if you remember back to

earlier in the video when we talked

about syntax and programming rules we

said that if you were to break the

programming rules or syntax that it

would result in an error well that's

what syntax errors are parts in your

program where you failed to meet the

programming rules and so the computer

doesn't know how to interpret your code

this can be anything from forgetting a

semicolon at the end of a statement in

Java accidentally defining a variable

with two words instead of one or even

just misspelling the word string when

you're trying to define a string

variable lucky for you guys

these errors are extremely easy to fix

since you just need to figure out where

the error occurred and what the syntax

rule you broke was now thinking back to

IDE s

we mentioned that IDs are so useful

because they do precisely that they

underline the syntax errors and usually

provide helpful hints as to how to fix

them think of syntax errors as small

misspellings or grammatical errors in an

essay you're writing annoying yes but

not the most infuriating things another

useful thing about IDE s when it comes

to syntax errors is that the program

will actually restrict you from running

the code unless all syntax errors are

cleared making them even easier to

identify and fix the second type of

error we will be covering is the runtime

error these errors don't show until you

actually run the code hence the name

runtime error runtime errors are usually

caused by statement in your code

that seems logically sound but the

computer physically has no way of

computing it in a reasonable amount of

time the most common of these errors is

one which we've already talked about the

infinite loop as a refresher or an

example think of an infinite loop like

this say you cite your friend down in

front of the TV put on the office and

told him he could leave as soon as

Michael made it that's what she said

joke seems pretty simple right wrong

because instead of putting in the office

you put in friends on blu-ray no Michael

no an appropriate joke meaning your

friend would be sitting there for the

rest of his life this is basically what

happens with the computer you give it

some condition that it has to complete

before the program can terminate however

you give it no feasible way to finish

the task this puts the computer in error

mode and most likely will crash your

program as a computer desperately tries

to complete the condition you gave it as

a computer example if we try to have a

program terminate when integer [[AI]] is no

longer greater than 99 but [[AI]] is

initially 100 and only ever increases

the loop will never terminate and the

program will crash to avoid these you

generally want to think through the flow

of your code before running it

especially with loops to make sure that

all of your statements can be completed

by the computer carefully planning out

your code before you begin writing is an

extremely useful practice and something

we'll be covering towards the later part

of this video the final type of error

that we will be covering is a logic

error this error is also pretty

self-explanatory

a logic error occurs when the code runs

smoothly without any runtime or syntax

errors but the result that you get just

isn't what you wanted for example let's

say you had a calculator app and you

wanted to instruct the program to add

two numbers except it multiplied them

because you use the multiplication

symbol on accident this leads to the sum

being 36 instead of 13 nothing went

wrong with the code syntax or runtime

wise the code runs just fine

it just doesn't work as you had and it

headed it - these are often the hardest

types of errors to debug since most of

the time you'll have no idea why the

code isn't working and certainly not any

idea of how to fix it this is why it's a

good idea to test your code

incrementally

don't wait until you've been programming

for an hour before testing your

application where else you'll run into a

lot of logic errors logic errors can be

extremely Fury aiding and could cost you

a lot of time making them a huge pain

but if you know how to effectively debug

your code you'll be just fine

speaking of debugging your code that

brings just straight into our next topic

which is how to debug your program now

let's say you've written a program you

think it's ready

and you're ready to test it you've been

working hard on this and you're deciding

to see it in action you run the program

and wait for it to run smoothly and

efficiently only it doesn't work you've

encountered one of the three errors we

just mentioned you really want this code

to work but how this is where debugging

comes into play if the code is giving

you an error and the first thing you

should do is read the error oftentimes

for syntax and runtime errors the IDE

will print an error message out to the

console see what line or lines it points

to since those are the lines that the

error occurred and see if you can

understand and fix what the problem is

if the error isn't clear or you've never

heard of it then try googling it as

there are many websites out there so

just Stack Overflow which service forums

to ask and answer problems with code

chances are if you've had a problem

someone else's have the same issue and

there's likely a tested solution usually

when the syntax or a runtime error pops

up you should be able to find a fix for

it fairly easily however as I said

before the issue may arise from some

loophole or oversight in the code you

hadn't planned forward beforehand maybe

you did something as simple as multiply

two variables instead of adding them

these are logic errors we talked about

previously these problems usually won't

have Fred Tex show up to explain what

went wrong you'll have to figure it out

yourself now there are a few different

strategies that you can use in order to

track down and fix a logic error first

you could use print statements and the

console in order to determine where the

code is going wrong

imagine you have a conditional statement

that will run one segment of code if an

integer X is greater than 5 and will run

another segment of code if not if in

your program X is supposed to be greater

than 5 when the program reaches this

conditional but for some reason the

program is still printing out X is small

you can use the prints they meant to

help for this problem specifically you

could place the print statement before

the branch of the can

that would print the value of X now when

you run the program you know exactly

what the computer is thinking printing

out the value of X just before the F out

statement let you know if the variable

has the value you wanted to have and if

it doesn't you know that somewhere above

that conditional something went wrong

and X was set to a value you didn't want

it to in this case X is equal to 2 which

is why X is small is being printed out

now that we know what the problem is we

can track down where and when in the

code we modify X in order to solve it

use print statements to determine where

your program goes wrong and then try to

track down the cause of these issues and

solve them if you use this strategy make

sure you end up deleting the print

statements afterwards to avoid clutter

in the console the situation described

above could also be solved using a break

point a break point pauses your program

when the line you place the breakpoint

at is reached if say you would like the

program to run through a certain

conditional and set a variable based on

that conditional but you are unsure if

this actually happens in your code you

can place a breakpoint inside the

conditional path that you expect to run

upon the breakpoint being reached the

program will pause and wait for you to

continue it through a button press this

signals that the spot in the code where

the breakpoint was placed in this case

the correct conditional path has been

reached by your program you can then

continue the program knowing that this

was or wasn't where the error in your

code occurred breakpoints can be used in

conjunction with print statements in

order to both pause the program and

perhaps view the values of your

variables at the moment in time to give

yourself all the information you could

want you can also have multiple

breakpoints to help slowly work your way

through your program and determine where

an error has occurred a combination of

these two strategies will help you

easily determine where in your code you

have incurred a logic error next let's

go over what to do if you think you have

tracked down the section of code that

causes the problem you may think you

should delete it but it's likely you put

it there for a reason

and you don't want to lose all that work

if you don't have to firstly try

commenting it out comments are used to

mark up code and explain their

surrounding sections they can also be

used to debug anything that is

designated as a comment will not be read

by the program as code and will be

skipped over essentially it becomes

something that is only there for you the

programmer

to read the syntax varies from language

to language but it usually involves

placing some symbols before or around

the code you would like to be commented

examples of how to comment in different

languages can be seen on the screen now

also when you come in something the IDE

will greyscale that line of code making

it extremely easy to determine what's

commented and what's not commenting code

deletes it in the computer's eyes

without actually deleting it if a

problem is present before you come in a

section of code but it has gone

afterwards then that section of code is

the culprit if you comment part of the

code out and there are still issues and

move on to another section until you

find the culprit once you do you can

tweak it until it works as intended or

delete it entirely and you'll have a

fully functioning program once again now

that we've talked about what to do if

you've encountered an error and if

strategy on how to find and fix it I

like to talk about some strategies you

can use to avoid errors in the first

place firstly back up your code

frequently in the event of the code

completely bugging out and you being

unable to fix it you'll want the ability

to revert to a previous version where

the code was still working

if you save frequently enough then you

will probably not lose too much work

version managers like github or

subversion can help with this as they

backup code to an online cloud surface

in which you can easily pull previous

versions of the program from at any

point also on top of saving running your

program frequently to ensure that the

current version works as intended this

accomplishes two things first of all it

prevents you from saving a backup that

doesn't work secondly if you encounter a

problem it will be easier to find if you

have only made a small number of changes

since the last time you ran and it

worked and thus you will only have to

look through the new code for problems

if you've spent five hours coding and

hadn't run it during that time period

it's going to be likely that at some

point during that five our code session

you messed up and it's going to be even

harder to figure out where you went

wrong errors while annoying and

extremely frustrating are a fundamental

part of making you a better programmer

alright now that we've covered errors

for a bit let's hop back on the

programming statement train and talk

about one of the most important concepts

in computer science

they'll function now you may not know it

but we've actually been talking about a

few functions this entire series print

statements for loops and even the basic

math operations we've talked about

are all examples of functions which of

course begs the question of what

actually defines a function well a

function is a segment of code that can

be easily run by calling the function

name and depending on the type of

function we'll do something in return

functions can be called numerous times

and in numerous places in your code

essentially they are like wrapping up a

segment of code into a nice present and

giving it a name which when called will

unwrap the present and go through the

code that you'd wrapped up for example

the print statements we've been using

this series allow us to print something

to the console anytime we want those are

functions you see we just call the print

function and enter in what we want to be

printed to the console into the

parentheses and the computer does it for

us behind the scenes there's actually

even more complex code that is in charge

of taking your text and translating it

to the console to be printed the

developers of almost all programming

languages realize that you don't want to

program something that manually has to

print something to the console through

the use of complex programming and so

they implemented the print statement to

reduce the stress and complexity of code

on the user abstracting it to the single

line of code that is print all of that

code that is used to print something to

the console is wrapped up like a present

and given to us in the form of one line

this is actually the main theme of all

functions and the backbone of any good

program often times in your program

they're going to be sections of code

which are repeated and serve the same

purpose or equations which you want to

allow different inputs of and so you can

use functions in order to condense these

down into singular lines of code to save

both time and reduce clutter on your

code as you will see soon functions are

extremely powerful and will definitely

be something you utilize all the time in

your computer science journey the print

statement is just one example of

functions in everyday code there are

thousands of function that are available

to you through the IDE s however because

we won't always use all the functions

that are available to you in a single

program you have to import these

functions from packages found in the IDE

which is something that we'll be

covering later on now there are four

main types of functions in most program

languages and they are separated by two

defining features whether or not they

take in arguments and whether or not

they returned values let's start by

separating them by whether or not they

take arguments but first we have to

cover what arguments actually are

arguments are essentially variables that

we pass into the function in order to be

manipulated and then either returned

back to us printed to the console or

used in another operation think of

functions with arguments like this if

you walked up to your local five guys

and told them that you wanted to get

food without supplying a type of food

they would probably look at you confused

in order to get the food that you want

you need to tell them exactly what you

want to order so that they can give it

to you in this case getting food is the

function and what you order in terms of

food is being passed in as the argument

based on what you tell them or the

argument that you pass into the get food

function they will do something

different you should also note that the

argument can be many different things it

could be fries burgers sodas really

anything on the menu and such as the

case with arguments and programming

arguments can be strings integers arrays

pretty much anything as an example of a

function that takes in arguments let's

look at the max function which takes in

two integers as arguments and returns

the maximum number between the two now

for this function if you don't input two

numbers or variables for it to compare

it's going to throw you an error just

like the five guys employee he doesn't

know what you want to eat since you

didn't provide him with any arguments

and the computer doesn't know which two

numbers you wanted to compare and return

since you didn't provide it with two

integers arguments are a way for

programmers to have one function that

can do many different things depending

on whichever variables can be passed

through arguments add variability of

programming and can help diversify your

code think of it like this

a restaurant that only allows one type

of food to be made regardless of what

you order isn't going to be very useful

or diversified but if we're able to pass

in arguments and tell them what food we

want our experience can be heightened

and more options can become available to

us which is exactly what happens when

you start using arguments in your

function

now that we've talked about functions

that take in arguments let's move on to

functions which do not because functions

can also be created and used without

taking arguments in and still be

incredibly useful to the programmer for

example let's say you are making a

text-based RPG game and one of the

options you give your player is the

ability to view their stats at various

points throughout the game now every

time you come upon this option and they

choose the view stats button you don't

have to type out six different print

statements for every statistic they may

have your code would get cluttered and

messy very quickly instead what you

could do is you could package the six

different print statements in a simple

function called print stats you don't

need to pass in any arguments into the

function since the function will do the

same thing no matter what the statistics

on the player are now every time the

user wants to view their stats you could

simply call the print stats function and

voila the user stats are printed for

them to view this allows you to save a

lot of time writing code but also a lot

of space which is extremely important

when your programs begin getting into

hundreds and thousands of lines of code

and you want to easily search through it

to maybe

debug okay now that we've separated

functions into those that take arguments

and those that do not let's again split

these up into those that return values

and those that do not now the thing you

have to understand is that when you're

making your own functions which is

something that we'll be covering very

soon you have to choose what your

function will return if anything at all

functions are able to return values back

to the user whether they be in the form

of string variables integer variables or

even arrays now the thing to note about

returning variables is that calling the

function alone won't do anything you

have to return the value into something

or print it out as an example the max

function we talked about previously

would return an integer back to the user

but in order to do something with it

we would have to either set a new

integer variable equal to the result of

that max function or we can print out

the result of the function which in this

case which is print out the maximum

value between the two integers using

functions which return values don't do

much on their own you have to pair it

with

something in order to gain the use from

it let's do another example let's say

you had created a function which took in

two string variables as arguments and

combined that using that fancy string

math we talked about earlier and then

returned them as a singular string this

combined string function could then be

used to create new string variables

since what it returns is basically a

string the variable would simply be set

to whatever is returned from this

combined string function the last type

of function is one that does not return

anything and these are known as void

functions oftentimes these are like the

print stat functions that we created

earlier simply use to condense large

amounts of print statements that appear

often in your code these can not be set

to variables since they don't return

anything and just get the code that's

within them run through so there you

have it the four types of functions ones

that taking arguments and return

something ones that take in arguments

and don't return something ones that

don't take in arguments but still return

values and ones that take in arguments

and don't return anything each of these

four types of functions are useful and

unique in their own way and you will

probably find yourself using each of

them through your programming journey so

get used to the different types of

functions and know how to make the most

of them as they are all extremely

powerful finally I'd like to talk about

one of the major benefits of functions

which is that it makes it super useful

to make large changes to your code

without having to go through the entire

program each function call is

essentially just a copy of that

functions original code and so it's very

easy to make changes to that initial

function and have a translate across

your entire code let's go back to our

print stats function and say that you

wanted to go back and add in a new

statistic that the player could level up

and through experience in the game

without functions you would have to go

back into your code and find every

instance that you'd printed out the user

stats and create another print statement

to display the new statistic however if

you had created a print stats function

like we did just a Lyle go all you would

need to do is find out where you define

that function and add in a print

statement which displays the new

statistic and you're done

now every place which you had previously

called the print stats function will now

also print the new statistic as well you

can see just how powerful functions can

be if used properly and we haven't even

scratched the surface yet now up next

we're going to cover how we can import

other people's functions that they've

written and use them in our code now

before we get technical close your eyes

and imagine you are trying to build a

house sure you could grow your own trees

chop down your own wood make your own

tools and nails and build from scratch

but why do that when you can simply go

to your local Home Depot and buy these

materials that others have already made

ready for you

that's the main idea behind importing

functions into your code importing

functions allows you to gain access to

libraries of functions that other people

have already made for you this is just

as useful as it sounds there are so many

functions that are super useful for any

given program that it will take you

forever try them all yourself

luckily other people already done most

of this for you in each programming

language you were able to use an import

statement to import libraries of

functions into your program that you can

use as you write it a library is simply

a collection of functions that all have

the same theme and may be a math library

a data analysis library a library which

translates texts or anything you can

think of really there's such a variety

of libraries for any given language that

most functions you require that are not

hyper specific to your program can

likely be found in some library in fact

a good portion of any programmers job is

looking online for packages which can

make his or her job easier instead of

hand writing functions now I can hear

you saying wow that's sick how do I do

it well it's quite simple an import

statement in most languages an import

statement consists of three parts the

library you would like to import from

the package you would like to import

from that library and then which class

from that package you would like to use

for example we can load up the java

library and from there import the you

tow package short for utilities and then

from that utilities package import the

scanner class a class which allows us to

read information from the user a package

is simply a smaller set of functions and

methods

differentiate between the thousands of

methods contained in a library and a

class is even more specialized than that

now if you don't know what specific

classes you're going to want to pull

methods from you can use a start import

all classes within the package you like

however it can be beneficial to be more

specific and only import the classes you

would like as it helps with the

efficiency of the program in the long

run

for instance in Python the syntax to

import a library is import followed by

the library name however importing an

entire library is more computationally

taxing than importing specific functions

from a library imagine you would only be

using the factorial function from the

Python math library it would be a waste

of computing power to import the entire

library and it would increase the load

time for your program for smaller

programs this isn't a big deal but it

really starts to add up when dealing

with larger projects therefore you would

instead use from math import factorial

or the Java equivalent import Java math

dot factorial and now have access to

that one math command only this limits

the functions that you can use however

it saves programming runtime if you

decide you want to use another function

that you hadn't planned for you can

always go back and import that too many

times if you try to use a function from

a common package and you have not yet

imported it the IDE will prompt you to

do so if you're trying to figure out

which libraries you want to import think

what the functions you're going to need

in your program perform a simple google

search and you will probably run into a

package or library that already exists

in your IDE that you can use and if you

can't there are ways to download and

import additional projects to fit your

needs

but what if after all that you still

can't find a library that contains the

function you're looking for well that's

a perfect segue into what we're going to

talk about next which is the basic

structure for writing your own functions

so at this point we've talked about both

what functions are and how we can get

some very useful functions by importing

them through packages but they're

definitely going to be moments in your

programming career where you're going to

want to make your own functions because

you won't want to be made specifically

to your program and code

luckily making your own functions is

extremely simple there are just some

basic rules that I want to cover now

well we've previously used making

functions as an example for other topics

such as the player stats function from a

little bit ago they were extremely

abstract and didn't go into depth into

what is needed for an actual function to

operate so right now we're going to be

covering a skeletal system of everything

that needs to be included in a function

in order to get it to work now think

back to the four different types of

functions that we talked about

previously functions that do and don't

return values and functions that both do

and don't take in arguments for creating

your own functions we're just going to

have to go down the list and talk about

how to approach creating each one of

them starting with the most basic of the

bunch one which takes in no arguments

and returns no values but before we

start that there are a few small things

I want to note about function naming

conventions the variable naming

conventions we talked about previously

also translate over to function names so

you can't have two word functions and

you can't use special characters like

periods or commas generally you're going

to want to follow the same camelcase

style which we talked about in the

variables video which is not

capitalizing the first word but

capitalizing each word after that

alright so in general for making

functions each language differentiates

on how you tell the computer that it's

actually a function in Java you have to

define the function scope which is

something you don't really need to know

unless you're going to become more

invested in Java but basically it tells

the computer which parts of the code can

use the function and which type can for

this series all of our functions that we

make are going to be public from there

you then determine which type of

function it is so in this case since it

won't be returning any variables we'll

just put void to signify this type of

function will not be returning anything

finally you put the function name after

those two identifiers x' along with the

set of parentheses after it like so

the parentheses are where your arguments

would go if you were making a function

that took in arguments but since for our

first type of function we're not

incorporating arguments into this

function let's just leave those blank

all of that is just for Java Python on

the other hand all you have to do is put

the word def short for define and then

the function name with a set of

parentheses so as you can see each

language is going to be a little bit

different in how you make functions but

the main thing we want to remember is to

always add parentheses from there we

just type what we want our void function

to do within the confines of the

function and close it off and we're done

in Java the confines of the loop would

be whatever is contained within the

curly braces and in Python it would be

until you are no longer indented at its

core this is the most primitive type of

function we've made something which

takes in no arguments and returns no

values quite similar to the print stats

function from early on moving on to the

next type of function creating a void

function that takes in arguments now

this process is going to seem very

similar to the previous except for one

small adjustment remember the

parentheses that I mentioned earlier

well we put any variables we want the

user to pass into the function into

these parentheses and then when we call

that specific function it will be

required to have those variables passed

into it for example in Java let's make a

function that takes in two numbers and

prints out the product of those numbers

we start with the public void plus name

of function setup again since we won't

be returning any values and here comes a

new part inside the parenthesis you

define which type of variables you would

like to pass in as arguments in this

case an integer and then a name for that

variable this name is what you will use

to refer to the integer that the user

passes in for example let's just call it

num1 then if we want to add another

argument we simply add a comma in

between the two and we can make another

integer variable num two to hold the

second number we can do this for however

many variables we want to pass into the

function but for now let's close off the

parentheses and just print out the

product of num1 and num2 as you can see

we refer to the two numbers that the

user will input into the function as

num1 and num2 whatever numbers that the

user passes into the function will be

converted into num1 and num2 now

whenever we want to call the multiply

numbers function we just have to make

sure that we are putting two numbers in

as arguments in this case the number 5

becomes num1 and the number 8 becomes

num2 from there we simply run the code

and the number 40 is printed to the

console it's pretty important to note

that you can also mix and match

variables when making arguments so you

can have some function which takes in a

car an integer and two strings all

within one function the last thing I

want to mention about arguments is that

when you call a function you have to

follow the variables you defined when

making the function so for our multiply

numbers function you couldn't put in a

string and then an int it has to be two

integers because that's what the

computer is expecting to be passed into

the function so now that we've gone over

how to make functions that don't return

variables we have to cover those that do

and we'll start with ones that don't

take in arguments now the main

difference between defining functions

that return variables and defining ones

that do not is that in some cases you

have to specify that you want this

function to return an integer variable

this is most common in Java

where you would replace a void with int

to tell the computer that you want this

function to give you something back to

you in the form of an integer this works

the same as if you wanted to return a

string care or even in an array you

simply replace the word after public

with whatever variable you want to be

returned by that function the most

important thing to remember about making

functions that return variables is that

no matter what path your code takes it

must return a variable no matter what

what does this mean well let's say you

had some string function in a game and

inside of it there was an if statement

where if the player score was above 10

you returned a congratulatory message

this works fine if you printed the

result of this function and the player

score is above 10 but if the player

score was less than 10 then you don't

enter the if statement and then you

don't have something prepared to be

returned to the user and so the function

is going to throw you an error you

have to have all your paths covered

which may seem simple but if you're

making a function with a switch

statement in it containing high amounts

of cases then this can get out of hand

very quickly something I like to do to

make sure this doesn't happen is put a

return statement at the bottom of a

function with a string or an integer so

unique that I'm able to tell that the

code is not running properly and can fix

it also usually an IDE will let you know

if there's a path in your code or in a

function that does not return a variable

when it should the main point I'm trying

to get across however is always cover

your exits and make sure you have a

return statement prepared for any case

the user may throw at you another small

thing to note is that you can't return

one type of variable if you've already

defined the function to return another

type for example you can't return a

string and an integer function or vice

versa the return statement must always

match the type of function no matter

what the final type of function is one

that returns variables and also takes in

arguments and for these all you need to

do is combine we've learned from the

previous cases first you assign your

arguments in between the parentheses

making sure that you have also defined

what type of variable you want to return

and then ensure that no matter what path

the code takes that you're always

returning that variable type that

concludes our discussion on functions as

you can probably tell functions are an

extremely vast subject area and require

a little bit of practice to fully

understand which is why later on in this

series will recommend some websites you

can use to practice those more difficult

topics

now I'd like to switch gears a little

bit and continue our discussion from

earlier on our race arrays while useful

aren't the only way to store and

manipulate information in fact there are

a multitude of different ways to store

data in computer science including

linked lists stacks queues maps trees

and many others too right now though I'd

like to talk about two cool

wacky and zany ways to store data that

we haven't previously covered array

lists and dictionaries but before we get

into those let's get a little review and

reinforcement of arrays as you may

remember arrays are basically lists of

values that are stored together when you

initialize an array you give it a size

and this size is fixed you won't be able

to increase the size of the array so

when you make an array it's length is

final to access the values and an array

you reference them using the index four

starts at zero what this means is that

the first item of an array is not at

position one it is at position zero and

its position is commonly referred to as

its index location so to find the nth

item in an array you would refer to it

as index location n minus 1 however as

the size of an array is fixed you have

to be careful to not reference a

position that's beyond the total size of

the array or to append too many items to

it as this will return an error we also

have what are known as two-dimensional

arrays which is an array containing an

array in each of its indexes or you

could have an array containing arrays

containing arrays containing arrays

containing a raise depending on what

you're trying to do multi-dimensional

arrays can be useful in more advanced

programs for organizing a wide volume of

related values if that's confusing at

all just give back to earlier for our

full discussion on arrays the time stamp

will be in the description now that

we've reviewed arrays let's go over

array lists array lists or just lists in

Python can be thought of as a growing

array earlier we mentioned how you have

to be careful to set an appropriate size

of your array and to make sure that you

only reference and append values such

that you remain within the size however

with array lists this isn't a problem

after you initialize an array

it instinctively has the size of 10 but

if you append values such that the size

of the array list goes beyond 10

elements an ArrayList will grow itself

meaning that the computer will allocate

more memory to the array to increase its

total size so that the new values can be

appended

this is quite useful when you don't know

the exact number of values that the

array will need to store or you want the

ability to store more values to your

heart's content such as when you're

making a database with an unknown amount

of users that will sign up there is a

lot more to uncover when regarding a

write lists but for this surface-level

series that is all you pretty much need

to know so let's move on to dictionaries

now when we're talking about

dictionaries

we're not referencing that thick book

you probably have lying around your

house which has thousands of definitions

in computer science dictionaries are

like arrays in that they store multiple

values however their dragons are stored

very differently rather than being

referenced by their linear position

within the dictionary each value is tied

to another value that is used to

reference it or it's key because of this

we need to throw away all conceptions of

dictionaries as a linear way of looking

at data since in actuality it is much

more fluid than interchanging basically

we say that each position in a

dictionary holds a key value pair when

referencing a value in a dictionary you

would use its unique key and the

dictionary will tell you the value that

it is tied to think of it like this each

time you add an item to your dictionary

your computer creates a handcrafted box

to store the data and also a custom

makes a jewel key one of a kind

no other like in the world this way

there is only one key that goes to the

box that stores a certain bit of

information because each key must be

unique we're using the key in a

dictionary will result in an error being

thrown because having two keys that are

exactly the same would confuse the

computer as to what box or piece of

information that key leads to however

you can store the same value in multiple

key value pairs since the keys would all

be different now like I said

dictionaries are more fluid making them

easier to organize than arrays as

everything is set up in a more logical

manner that is to say it is easier to

find the value you are looking for when

you're using keys rather than simply

referencing their positions let me

explain what I mean

imagine you have a dictionary of prices

at a store where the key is the name of

the product and the value is the price

of the item

maybe apples cost $1 mil costs $2 and

bread costs $3 you can see that in the

dictionary each key is the name of a

product and each value corresponds to

the price of each product so to find the

price of bread

all you need to do is simply call the

dictionary using the key bread this

makes it extremely easy to track values

through your code since you're working

with tangible values rather than numbers

which don't mean anything to you you can

also manipulate dictionaries and many of

the same ways you can manipulate arrays

and array lists you can iterate through

a dictionary and perform many operations

and comparisons on the values if you

want to find the product with the

highest price for example you can

iterate through the dictionary to find

the value that is highest amongst the

grocery store items arrays array lists

and dictionaries are useful in their own

right as are the mass amounts of other

ways to store data and each boast

certain advantages over one another we

already covered the basics of these

three but since there are so many we

don't have time to go in-depth into each

and every one of them and so in order to

help you grasp the basics of storing

information we're now going to talk

about one of the most important

functions needed to understand arrays

which are searching algorithms now just

as there are many ways to store

information in computer science there

are even more ways of searching through

lists searching algorithms at their core

are ways in which we can look through a

list of values stored in an array say a

patient named list or a high score list

and find a particular piece of data the

goal of a searching algorithm is simply

to give the algorithm a string or object

you want it to find and have it return

the index of the array that contains

that string or object as fast as

possible now while this may seem simple

lots of software runs on the backbone of

being able to search through lists

extremely quickly making searching

algorithms and in particular efficient

searching algorithms an important topic

to cover additionally this is the main

functionality that arrays are used for

and it's the backbone of many of the

methods used within array lists as well

as many other storage methods so knowing

them will take you a very long way

typically searching algorithms are used

to return the index of a particular data

point so that it can be used modify

I updated or checked on for example if

you're about to check into a hospital

run on an array system for patients the

staff must search through your name in

the database and by returning index of

where your name is

they now have a quantifiable number that

they can use to easily check you in rent

out prescriptions schedule you for

checkups update your personal

information etc without having to search

through the list for your name every

single time you may think that there's

little difference between searching

algorithms since computers nowadays can

perform millions of calculations per

second but when you're a huge

multi-billion dollar corporation trying

to find a certain data point in a list

containing thousands or even millions of

data points small differences in

efficiency are going to make or break

the user experience even a 1%

improvement in efficiency can mean a big

differences in the amount of time that a

user is waiting for a simple task now

Before we jump into different types of

searching algorithms we must discern

between the two states that a razor list

can be in either sorted or unsorted a

sorted list of information is

characterized by some sort of rank able

value whether that be a patient ID

credit card number or even by

alphabetical values like usernames or

legal names an unsorted list is just

some random assortment of related

information not sorted by any particular

order or reason some searching

algorithms only work for sorted lists

usually the more efficient ones and some

work for both sorted and unsorted lists

although these are usually less

efficient if you end up pursuing

computer science further you'll have to

deal with both sorted and unsorted lists

so it's good to know a common searching

practice for both another thing to note

is that we would determine the

efficiency of searching algorithms based

on both the worst case scenario and the

average number of items that must search

in order to find the index we call this

Big O notation in which each searching

algorithm has an equation which takes in

the size of the array as an integer N

and will output a worst case scenario

efficiency value that we can use to

compare with other searching algorithms

we can then also look at how long on

average it takes to find an element in a

list using these two methods allows us

to easily compare how efficient two

algorithms are

all right now that we've got some

background on searching algorithms

they'll top right into it the first type

of search we'll be talking about is

called a linear search and Eve honestly

probably uses multiple times throughout

your life every time you have to search

for your name on a list of people you

probably follow the same pattern you

start at the top check to see if the

first name on the list is yours if it is

great if not you move on to the next

name on the list until either you find

your name or you don't in which case you

leave a linear search works in the same

way you start with the first element in

the list compared to the value that

you're trying to find and if they're the

same you found your match and you return

the index of that element and if not you

move on to the next element in the list

until you either find the thing you're

searching for where you run out of list

to check pretty simple right this is

because linear searches are pretty bad

when it comes to efficiency especially

in the worst case scenario if the item

you're searching for in the list is the

last element you're going to have to

check the entire list of items before

you find the one you're searching for on

average however you're going to get it

about halfway through the list

this makes the linear search o of n

worst case scenario since in the worst

possible case it will take the entire

length of the array or n to find the

correct value the linear search on

average will return the correct index in

oh of n divided by two we're halfway

through the list

now while the linear search isn't great

it can work with both sorted and

unsorted lists because of the fact that

it will eventually cover every element

in the list the other search we're going

to cover requires the list to be sorted

which may seem like a drawback but

having a sorted list allows you to use

algorithms that are far more efficient

than the linear search so overall the

linear search is a good basic searching

algorithm before if you have an unsorted

list but if your list is sorted there

are way more efficient options out there

for you such as the binary search which

we'll be talking about now the binary

search uses a recursive process to break

the data in your list down into more and

more manageable bites taking advantage

of the fact that it's sorted in order to

find the item you're looking for faster

this one is much harder to wrap your

head around so let's start with an

example

let's say you have a list of 10 names

sorted alphabetically like shown on the

screen now and you wanted to find your

name within that list in binary search

you would look for the middlemost name

in this case the one at the 4th index

just a quick aside since there is no

true middle since the list is ten names

long the computer automatically uses the

next one down as the middle value now

once you find your middle value you

first check to see if the name you're

searching for at the index you've chosen

is the name that you're looking for if

it is you simply return that index but

99% of the time it's not going to be

including right now so let's keep going

if the value at the middle name is not

equal to the one you're searching for

you check to see if the value you're

searching for comes before or after the

middle index for example if you were

looking for the name Brendan and the

value at the middle index was Carl

Brendan obviously comes before Carl

alphabetically and since we know that

the list is sorted what we can now do is

ignore the entire bottom half of the

list and just focus on the top since we

know that if Brendan is even in the list

it's going to be in that top half now we

simply treat the top half of the list as

an entirely new entity and repeat the

process over again again we would find

the middlemost

element of this new list of names and

again compared to the name you're trying

to find if it's the name we're trying to

find we return that index but if not we

compare it to see if it comes before or

after the middle index going back to our

example let's say the middle index of

this new list is AJ now we know that

Brendan comes after AJ alphabetically so

what we can now do is ignore the top

have the list since we know that if

Brendan is in the list it's not going to

be in the top half of our list now we

again repeat this process again and

again until we find the name we are

looking for so for our example the

middle index is time is Brendan and

that's what we're searching for so

finally we would return the index to in

binary search

eventually the index we were compared to

our search term will be the same and

once it is we can return the index and

move on

now if we don't find it which happens

after we have eliminated the entirety of

the list without finding our search term

the algorithm will simply return a no

value to let you know that the item

you're searching for cannot be found in

the list

the binary search is way faster and more

efficient than the linear search

since we are drastically cutting down

the amount of elements we have to look

at making the program run faster in

almost 99.9% of cases in which your list

is sorted the binary search is going to

return a result faster than the linear

search so if you have a sorted list your

best option is to go for binary as for

efficiency the binary search is a log n

for the worst case scenario which could

be confusing if you don't fully

understand logarithms but all you need

to know is that it is way more efficient

than the linear search it's average

scenario is actually also o log n as

well which again is infinitely times

more efficient than the linear cases now

while there are other types of searching

algorithms you can use these two are the

most common for both unsorted and sorted

lists so we will stop there for now

up next we're going to be covering one

of the most confusing and important

topics in computer science recursion

let's start with the most important

question what exactly does recursion

mean in programming recursion refers to

functions that repeatedly call

themselves meaning that in the

instructions that occur within a

function one of the instructions will be

a call to that same function you're

already in in the extremely primitive

example on your screen now you can see

we have some function which in the

confines of itself calls itself a

recursive function we usually take into

account some integer as an argument and

we'll use this to carry out some

instructions modifying the integer that

was entered before calling itself again

with a new integer as its argument to

better understand these functions let's

discuss the basics of how we go about

programming one of them a really good

and easy example of a recursive function

is one which sums up all numbers from 1

to n so let's make a recursive function

that does just that the first thing we

need is the actual function and we're

going to make it an integer function

which takes an integer n as its argument

the reason we do this will be explained

later but for now let's move on to the

base case a base case is simply a

definite value which all recursive

statements the ones that are being

repeatedly called as we go through the

function try to get towards had to be

any of the function we test a value that

was passed in by the argument against

the base case to see if it is satisfied

usually these base cases are some

requirements like if n as I described

before which is a certain value or is

equal to a certain value it is extremely

important that the base case is set to

some requirement that n will eventually

meet for the same reason that it is

important to avoid an infinite loop we

do not want a stack overflow error to

occur for example if our base case was

to stop calling the recursive function

when n was greater than 100 and if it is

not we will call the same function again

but with n minus 1 and we started with n

as say 99 we would never reach the base

case and the recursive function will

repeatedly call itself over and over

again subtracting 1 from N and hoping

that somehow it will eventually be

greater than 100 until your computer

crashes not fall so anyways back to our

recursive some example let's make our

base case when n is less than or equal

to 1 this way we can start at some

positive integer n

and subtract from it until it is less

than or equal to one in which case we

can exit the recursive statement cool

now if n is not less than or equal to

one what we want to do is return the sum

of both N and then the returning value

of our recursive sum method

minus one why do we add and end the

function call well let's actually go

through the function as if we were the

computer and see why we start with a

call of recursive sum with N equals 3

we know that 3 is not less than or equal

to 1 so now we tried to return a

recursive sum of n which is 3 and the

returning value of recursive sum with an

N of 2 we don't know what the returning

value of recursive sum with an N of 2 is

so we have to go through the function

again only this time n is 2 again n is

not less than or equal to 1 and so this

function will go through the else

statement in return 2 plus another

recursive statement in this case the

returning value of recursive sum with an

N of 1 so once again we have to go

through the recursive sum function to

get that value that will be added to 2

and then returned and add it to 3 and

then return

hang in there we're close now in this

function and is less than or equal to 1

and so we return n which is 1 now we

take that n which again is 1 and that is

what gets added to 2 in the previous

function call and then return so this

would return 3 now this 3 is what gets

added to the first function call which

is 3 and so it becomes 3 plus 3 which is

6 and finally after all that time we get

6 return from the function which if

you've been following along at home 3

plus 2 plus 1 is indeed 6 now this may

seem like a waste of time since 3 plus 2

plus 1 is not a hard operation but to

those of you saying that I asked you to

please give me a sum of all the numbers

from 1 to three thousand 567 Godspeed

now recursion is a very difficult

concept to wrap your head around so if

you're not 100% comfortable with it at

the moment

feel free to rewatch this section of the

video in order to better familiarize

yourself with it all right cool now that

we have a little background on recursion

let's talk about why it works so well

now to understand why and how recursion

works we must first understand what a

stack is a stack is a data structure

that contains all of the tasks you

instruct your program to complete based

on a certain method your program will

then carry out the tasks you give it

it's called a stack because if we start

another process before the previous one

completes the process is stacked on top

of the other one such as the animation

on your screen is showing now programs

we write will follow the leaf o

structure for those unfamiliar with the

counting leaf o means last in first out

or the last item put on the stack will

be the first one removed from it

essentially every time you ask your

computer to complete a task that task is

added to the stack and will be the first

one to be resolved think of it like a

stack of stones you can keep adding

stones on top of your pile but in order

to get to the one at the bottom you must

first remove all the rocks on top of it

now when your function continually calls

itself without end without a base case

like in our infinite loop example then

the stack will never be resolved as

items will be continually added to the

stack without any of them ever being

completed in this case the memory

allocated to the stack exceeds the

maximum allowed and a stack overflow

error occurs resulting in your program

crashing think of this as if you're

doing chores and before you complete one

chore you get called to do another chore

and then before you can complete that

one you get called to do another one

since you keep stacking tasks or shores

on top of one another the stack of tasks

will never be completed and you will

probably die before ever finishing all

of your chores this is the same logic

that makes infinite loops crash your

program recursion works on these same

principles the initial call makes a

second call which is added to the stack

and now that one must be taken care of

first but in that one another

function is called which gets added to

the stack and so on until you reach the

base case in which you slowly start

going back down the stack in conclusion

recursion in general is extremely useful

because by calling the same functions

repeatedly it breaks down the problem

into smaller sections and results in the

program being more efficient small parts

of problems are easier to solve and less

taxing to compute than the entire

problem at once and the computer can

combine these small solutions into the

whole solution at the end now as we wind

down our introduction to programming

series we want to take some time and go

over some of the soft skills needed to

be a successful computer scientist since

it's not all about writing code in fact

many professional computer scientists

will tell you that the majority of their

job is spent thinking about code

rather than actually writing it this is

because much of programming boils down

to problem solving how do we optimize

the system how can we make this feature

for our app what type of movement do we

want for our game and how can we program

it the harsh truth is that no good

program has ever been written simply

from the program are getting the

prompter idea sitting down hopping on an

IDE and starting to write code

there are many tasks we should go

through beforehand in order to plan out

our code so we ensure that when the time

comes to program it's a clean and easy

process and not riddled with mistakes

and bugs this is where pseudocode comes

into play think of pseudocode like this

if you wanted to take a family trip to

the Grand Canyon would you simply hop in

your car and drive off and figure out

things later no because I would be

ridiculous instead you would spend some

time planning out the trip what sites or

places do you want to visit

what hotel reservations are you going to

have to make what kinds of things are

you going to do when you get there what

routes are highways are you going to

take and why all of these things must be

determined before you can even think

about hobbing in your Ford Explorer so

how does this translate to pseudocode

well think of our family trip to the

Grand Canyon as a program programmers

use pseudocode sudo meaning not real and

code meaning code as a means to plan out

their programs before they write them

just like how we planned out our trip

before going they throw away syntax and

naming conventions for variables and

just focus on what they want the

program to accomplish and how they plan

on doing that pseudocode is very similar

to constructing an outline for a paper

that you're writing you write down the

main topics of the essay and plan out

your major talking points but you don't

worry about the nitty-gritty details of

it all such as word choice grammar

conventions and proper formatting by

doing this we allow ourselves to think

freely and not worry about stressing the

small stuff at least not yet all right

now that we know what pseudocode is

let's talk about how we write pseudocode

you see the best part about pseudocode

is that it can take the form of many

different things for many different

people each computer scientists has

their own methodology for planning out

their code and there are probably

hundreds of different methods of writing

pseudocode that are out there today

today however I'd like to focus on three

popular ones that I think you might find

to be extremely useful the first of

these is known as flowcharts and mainly

they can be used to think through the

process of a particular function a

flowchart is fundamentally a graphical

representation of a function and how it

might flow many programmers do this and

lay out the conditional statements and

loops that they want as different blocks

in the flowchart connected by arrows and

charting out every path of their

function from there it's extremely easy

to create test cases and follow them

through the flow of the function through

the different blocks and arrows for

example we could have a flowchart that

goes something like this

a user enters in a number and if the

number is 8 I want the program to return

true however if the number is not 8 then

I wanted to return false it's a great

way to visualize what the functions

overall purpose is and also look for any

errors that you may have missed when

thinking about the function such as a

missing path it also abstracts the

programming statements up to simple

blocks making it easier to modify or

change completely the best part is that

when you have finished testing cases you

can simply convert the blocks into

programming statements and you have a

well written function without any

debugging another popular pseudocode

technique that is often used is to

simply write out what you want your code

to do chronologically don't necessarily

think about what programming statements

and functions you want to use just jot

down from start to finish what it is the

program you're writing is going to do

step by step

for example let's say you're making an

app that takes in two numbers and

divides them the pseudocode for that

would look a little something like this

first I want to prompt the user to enter

a number and then I want to wait for the

user to enter in that first number after

I get the first number I want to again

prompt the user to input a second number

once they do I complete the operation by

dividing the two numbers entered and

returning the result back to the user

this all seems like it would be common

sense but remember that oftentimes we're

not going to be working with simple

multiplication or division functions we

may be working with full-scale games

algorithms or user interfaces with many

different options this method allows you

the programmer to not get bogged down

with the syntax and conventions that you

have to follow you're simply making a

note of what the program's ultimate goal

should be as if you were explaining it

to a friend of yours this method really

lets you plan out everything that needs

to happen in your program in order for

it to run smoothly it also ensures you

don't forget about a piece of an

algorithm or a certain function that you

need to write in afterwards and the

final pseudocode strategy that I'd like

to talk about to you today is writing

out the main features you want the user

to have when using your program and what

functions or smaller programs you're

going to need to complete these features

let's do another example say you're

making a banking interface and on

startup you want the user to initially

have two options they can set up a new

account or log in to an existing account

from there if they log into their

account then you want them to have the

functionality to withdraw money deposit

money take out a loan or pay back a loan

if they decide to set up a new account

you want them to be able to create an

account store their information in a

database and then access all of the

features that a returning member would

have this may look very similar to the

flow chart method the only difference

being that this is abstracted one level

higher over an entire program rather

than just a single function if you

really wanted to you could also create a

flow chart that would go through the

functionality of all the four methods

described above setting up a hierarchy

like seen on your screen now makes it

easy and clear to see every function in

interface you're going to have to

this prevents you from having to try to

shoehorn a function or feature into an

already finished program at the last

second which is not a very fun

experience in the slightest so there you

have it three pseudocode strategies you

can use to plan out your code before you

even start writing any the flowchart

method which is good for thinking

through the flow of a certain function

the write up method which is good for

getting the general idea down for a

program or the functionality planning

method good for listing out the

functions of a certain program you can

use all of them none of them a mixture

of them or even disregard these and find

and create your own pseudocode methods

the main goal here is to drastically

minimize the amount of errors that occur

during your program and relieve a lot of

stress on your head the importance of

pseudocode cannot be stressed enough and

if you don't believe me I urge you to

try to complete a large project without

it ok so if you've watched the series up

until this point you've gotten a pretty

good understanding of many aspects of

programming and also how to plan out

your programs now it's time to go out

into the real world and write some

actual code but what kind of program I

can hear you asking me and the answer is

truly whatever you want really as I'm

sure you know by now you can program

just about anything you have on your

mind anything from simple games to

complex software this video has equipped

you with the basics that are going to

need to be used in pretty much any

program you decide to write but that

doesn't mean that every programming

language is perfect for every

application each language has its own

strengths and weaknesses and choosing

the right one is very important for

making it easier and sometimes just even

possible for you to program what you

want so that's what we are going to be

talking about now choosing the best

language for what you want to accomplish

now we talked earlier about low level

versus high level programming languages

in case you forgot let's do a quick

refresher higher level programming

languages have a higher level of

abstraction from machine language that

series of zeros and ones from way back

when while lower level programming

languages have a low level of

abstraction from machine language for

example block programming where you can

drag and drop programming statements

together like 2d Legos would be a high

level language

as it does not take a high level of

understanding of the inner workings of a

computer to program it the theoretical

highest level of a programming language

would be if I could just write down what

I wanted the computer to do in simple

English and it would just work but sadly

that doesn't exist yet on the other side

of the spectrum the lowest level

programming language would be just

feeding zeros and ones into the computer

at supersonic speed which would be

almost impossible and extremely absurd

so how do you choose what type of

language is best for your needs well it

depends on what you are trying to do as

sometimes you need very specialized

languages to get done what you want the

world of computer science is vast and

contains many fields so trying to cover

everything in one language would be

impossible this has led to the creation

of hundreds of different programming

languages each designed for a specific

task right now though we'll cover some

of the most popular languages and their

uses

now if you are trying to design a

website using HTML and CSS is probably

your best bet HTML is a markup language

that is designed for writing the content

of a web site while CSS is great for

designing the style of the website you

interact with HTML every day and you can

even see it right now if you right click

and hit inspect element this will truly

show you how complex HTML and CSS can be

maybe it would be best for you to use a

scripting language a scripting language

is a language that has many comments for

you to use and that can also be run

without needing to be compiled scripts

can be faster to write in most programs

and tend to be easier to port between

operating systems allowing for

cross-platform support scripts can also

be used with websites oftentimes adding

to the overall user experience of the

site if you want to go into web design

this might also be a path for you to go

down examples of scripting languages are

Perl PHP Ajax and JavaScript for most

programs you could probably use a

general-purpose language general-purpose

languages as they sound have a wide

range of applications usually these

should be your go-to languages examples

of general-purpose languages are Java

plus plus in Python they each have their

own different benefits over one another

Java is very useful for developing games

and interactive web pages Python can act

as a scripting language for web

programming as well as writing

applications and data analysis and C++

tends to be used for writing

applications and system programs they

all have a variety of packages that you

can import and use to achieve the

functionality you need from them while

selecting the right general-purpose

language for your big projects is very

important for most of your programs any

one of them will work it really comes

down to preference get to know each

language and decide which one's syntax

rules you like best and find most

comfortable if you get to know one

general-purpose language really well and

enjoy programming with it you can apply

to just about any of the programs you

plan on writing personally I tend to use

Python for most of my projects this is

mostly not due to any functional

difference between Python and any other

general-purpose language though there

are a few but it is mainly because I

find its syntax rules most convenient

and easiest to write programs with

overall either you could consider the

product you plan on doing and research

and see which language boasts the most

advantages for your purposes or you can

simply become comfortable with a

language and use it from most of the

programs you decide to write

we'll now be looking at our final topic

of this introduction to programming

miniseries you now have the basic

knowledge of programming which will take

you far in any language that you decide

to learn you know some good

pre-programming pseudocode strategies to

help you design your code from the

ground up and you might already have a

good idea as to the type of programming

language you might want to start with so

what's the next step how can I learn

that language and what applications can

it be used for well that's what we're

gonna be covering now so let's just jump

right into it starting with the biggest

question which is what is the next step

well now that you might know which type

of language you might be interested in

research that language and find out

whether or not you truly want to pursue

that programming language most languages

like Python or C++ will have either an

official website where you can read up

on the language or a Wikipedia page

which will provide you with useful

information in deciding whether or not

you want to pursue that path from there

the next step is to actually learn the

language which can be done right here on

YouTube while we have taught you the

basics of any programming language each

specific language is going to expand

upon these concepts and so watching

tutorial videos on a certain language is

going to be very beneficial I would

start with an introduction series like

the one you're currently watching but

for the language you have chosen and

work your way through that series

picking up on the syntax and rules of

that language until you become

comfortable with it once you do that you

come to a crossroads you know how to

program in a certain language but you

may be completely clueless as to what to

make in that language

programmers block can leave you

uninspired and not want to continue

programming so I'd like to give you a

few websites to help out first is coding

that a completely free website which has

hundreds of coding challenges in both

Java and Python to help you refine your

programming skills and even learn some

new programming shortcuts and tips this

is great if you want to get better at

improving your efficiency and need

something to hone your skills as a

developer the next is coder bite which

offers over 200 plus challenges that you

can complete in over 10 different

languages something that is sure to help

you improve the final website I'd like

to talk about is hacker rank which not

only provides programming challenges

keep you on your toes but also provide

support for you using your programming

skills to find jobs or internships these

and many more websites exist solely to

keep you interested in code and work on

refining your skills to become better

now if you're a teenager watching this

series in high school I also encourage

you to take programming classes in your

high school ap computer science

principles and AP Computer Science a are

both amazing courses which can help you

greatly in the future and are also

incredibly informative and important to

colleges your school might also offer

other classes in the fields of computer

science including ones on key data

structures game design and data science

any in all classes you can take to help

expand your knowledge of programming and

help you find your niche is going to be

extremely helpful as you can see the

world of code has now been opened up to

you these are just a few examples of

where you can go from here but there are

many more we didn't talk about you could

get into github and start contributing

to projects you could work on your own

projects and collaborate with others the

possibilities are endless the next step

is up to you this concludes our

introduction to programming mini-series

we hope you enjoyed watching it as much

as we enjoyed making it if you enjoy the

series as a whole

consider subscribing to our Channel a

null pointer exception which will be

linked in the description for more

content like this coming soon thank you

so much for watching

