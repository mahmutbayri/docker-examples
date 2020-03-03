# Task list CRUD Example

Adonis is great framework to create fullstack web application. It is very similar to Laravel PHP framework. If you familiar Laravel, you will see how it is easy to learn.

## Installation

    git clone --dissociate https://github.com/mahmutbayri/adonisjs-todolist.git
    npm install
    
    cp .env.example .env

Before migration you should update your database configuration in `.env`

    adonis migration:run
    adonis seed
    adonis serve --dev

Then you can navigate `http://localhost:3333/task` url

## Installing as Docker Container

## Build
    docker build -t node-adonisjs .

## Run
    docker run -p 3333:3333 --name node-adonisjs-container node-adonisjs
    
## Cleaning container and image
    docker container rm -f node-adonisjs-container
    docker image rm -f node-adonisjs
    
Then you can navigate `http://localhost:3333/task` url

## A preview from the project.

![](public/list-page.gif)
