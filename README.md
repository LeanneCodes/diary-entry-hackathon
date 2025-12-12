# diary-entry-hackathon
# Debug assignment 2
# Snack API
## Overview

This is a CRUD Apllication for your persona;travel blog. It allows you to have your own travel diary by adding, removing, viewing by date, category and name. 

## Prerequisitions
- Node.js
- npm
- a cloud-based database hosting platform ie supabase

# Installation
- clone the repository 'git clone git@github.com:LeanneCodes/diary-entry-hackathon.git'
- navigate to the project directory
- navigate to the project
- install dependencies
- setup your database in using supabase or other host
- retrive your url and paste in your env file assigning it to DB_URL variable
- run 'npm run setup-db'
- set up your port, add PORT key and assigned it a port of your choise ei: 5000
- run the server 'npm run dev' or 'npm start'



## API Endpoints
| Method | Endpoint     | Description  
|--------|--------------|--------------------|
| GET    | /entries      | Retrieves all travel entries   |
| GET    | /entries/name  | Retrieves a single entry by name of the country    |
| POST   | /entries/       | Creates a new snack           |
| DELETE | /snacks/:id     | Deletes a snack |
| GET    | /snacks/top     |Shows the most voted snack

## Future features
- the application will be deployed using render 
- the application will have a beautiful front end that will allow user to interract in a more fun way using a browser
- there will be more options for the user: ability to group the snacks, create own favourite list, create ideas for snacks that don't yet exist
- the application has a dockerfile- in the future instructions will be added on how to build a custom image and run a container based on that image


## Bugs
