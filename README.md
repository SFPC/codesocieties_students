# code societies winter 2019 student repository

[syllabus + blog](https://github.com/SFPC/codesocieties-winter-19)


once you have access to this repo you can run the following commands in a terminal:
1. git clone git@github.com:SFPC/codesocieties_students.git
2. cd codesocieties_students
3. atom . (or open folder in text editor of choice)
4. make changes to files (index.html for example)
5. save changes
6. go back to terminal window
7. git status (to see a list of which files have been edited/added)
8. git add -A (to add any newly created files)
9. git commit -am "your message"
10. git push origin master

if you already have the repo on your computer make sure to run the following commands before making changes:
1. git fetch origin (this will download all of the latest changes from the repository)
2. git reset --hard origin/master (this will write all of those changes into your local version of the repository)


# Blog list :seedling:

## How to add to the list
1. Clone this repo
2. Add a new item to the array in `/list-of-blogs/blogs.json` with your title and url
3. Push the updates to this repo!

## How to use the list
1. Add a `<div id='sfpc-marquee'></div>` somewhere on your page
2. Add `<script src='http://cdn.jsdelivr.net/gh/SFPC/codesocieties_students/list-of-blogs/get-blog-list.js'></script>` at the bottom of your page

Note: The script currently just adds a list of anchor tags to that div element, but feel free to create and share your own implementation  

Ping @matt if you have any questions & happy blogging! 
