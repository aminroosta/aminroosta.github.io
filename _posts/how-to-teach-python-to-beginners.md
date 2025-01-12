@import "index.less"

[back to home](./index.html)

## How to teach python to beginners

A while ago I wanted to teach my brother programming.
The obvious language to start with is python, because of it's simplicity. 
I googled a lot and found this awesome tutorial to start with [snakify.org](https://snakify.org).  

It goes through the basics, like variables, conditional statements, functions, lists, dictionaries, sets and some more. Once that is done, there should be a next step. I thought about it and came up with a small mini project, to harden the lessens learned from [snakify](https://snakify.org).

The rest of this blog post is the description, for a mini programming project.  
It describes an address book for managing contacts. 


## The address book program

Write a python program, lets call it `address-book.py` that helps the user, manage his phone contacts.

Here is how the program works, it takes a line as input and processes it.  

The lines that start with `>>` are the inputs to the program.

```bash
$ python3 address-book.py
Welcome to address book, type "help" to learn more.
>>
```

Each following section describes supported commands, and the expected results.

Unknown commands are rejected, for example:

```bash
>> alkdjflkjd
ERROR: command "alkdjflkjd" not found!
```

### add

`add <contact-name> <phone-number>` adds a new contact.


```bash
>> add amin 0123456789
Done! added "amin" with phone number "0123456789"
>> add omid 0224457890
Done! added "omid" with phone number "0224457890"
```

Note that `add` will update an existing contact number, for example:
```bash
>> add amin 0123456789
Done! added "amin" with phone number "0123456789"
>> add amin 0224457890
Updated! from "0123456789" to "0224457890" for "amin"
```

Bonus for `add`:
- reject phone numbers that are not numeric
- `add amin 023abc` give an error
- also reject empty phone number
- `add amin` gives an error

### search

`search <pattern>`

The search command searches for all the added contacts so far, and prints the ones that match the given pattern.
```bash
>> add amin 0123456789
>> add omid 0224457890
>> add ehsan 0224457890
>> add hasan 0224457890
>> search mi
Found 2 contacts:
- amin => 0123456789
- omid => 0224457890
>> search san
Found 2 contacts:
- ehsan => 0224457890
- hasan => 0224457890
>> search naaa
Sorry, no such contact found!
>> search
Ok, here are all contacts:
- amin => 0123456789
- omid => 0224457890
- ehsan => 0224457890
- hasan => 0224457890
```

### delete

`delete <pattern>` deletes the contacts that match the given pattern.

```bash
>> add amin 0123456789
>> add omid 0224457890
>> add ehsan 0224457890
>> add hasan 0224457890
>> delete mi
Deleted 2 contacts:
- amin => 0123456789
- omid => 0224457890
>> delete san
Deleted 2 contacts:
- ehsan => 0224457890
- hasan => 0224457890
>> Delete naaa
Nothing to do, no contact found.
>> delete
Sorry, you are not allowed to delete everything at once.
```

### exit

`exit` exits the program.

### help

`help` prints a help message for each command

```bash
>> help
- add <name> <phone-number>
- search <pattern>
- delete <pattern>
- exit
```

## Address book program - Extra
Python gives you the ability to read and write from files, including text files.
Here is a good blog post explaining how it works: https://realpython.com/read-write-files-python/

Modify your program so that, it saves it's current state in a file, so if you restart it, it keeps working.


Example:
```bash
$ python3 address-book.py
Welcome to address book, type "help" to learn more.
>> add amin 01234567
...
>> add omid 01234576
...
>> exit
Bye!

$ python3 address-book.py
...
>> search
Found 2 contacts:
- amin => 01234567
- omid => 01234576
>> delete omid
...
>> exit
...

$ python3 address-book.py
>> search
Found 1 contact:
- amin => 01234567
>> exit
...

$
```

tips, try to save your contacts, in a file as you exit the program, and read it back when the program starts. the `file.readline` and `file.writeline` should help you with that.