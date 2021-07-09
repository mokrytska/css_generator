To start work move card tp "in progress"

Create new branch from main

git checkout main

git pull

git checkout -b [branch name]

Branch name

if it is feature -> feat/{issue number}

if it is fix -> fix/{issue number}

After work is finished

create commit 

push changes

create pull request to main

and move card to "in review"


If there is a conflict and brabch feat/8 (for example) cannot be merged to main
do next localy

in feat/8 commit all changes

git commit -m 'some description'

git pull origin main

resolve conflicts in code

git commit -am 'resolved conflicts in example.js'

git pull
