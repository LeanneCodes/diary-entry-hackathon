# diary-entry-hackathon

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

| Method | Endpoints                         | Description  
|--------|----------------------------------|----------------------------------------------------|
| GET    | /entries                         | Retrieves all travel entries                       |
| GET    | /entries/name                    | Retrieves a single entry by name of the country    |
| GET    | /entries/category/<destination>  | Retrieve entries by destination                    |
| GET    | /entries/date/<eventTimeStamp>   | Retrive entries by date                           |
| POST   | /entries/                        | Creates a new entry                               |
| DELETE | /entries/name                    | Deletes an entry                                  |
| PATCH  | /entries/name                    | Make changes to entries                           

![home-page](/public/Capture.PNG)

## Future features
- allow for commenting from other users
- allow to add images
- create a plan for future adventures
- add exra information about visiting coutries
- allow other users to create recommendations and add their own stories

## Bugs
There are no bugs in the application at the moment
