# CourierClient

## https://antieatingactivist.github.io/Courier-client/
(This link is meant to be opened on a mobile device) 

The idea for this app was born out of frustration over the type of app I had to use in one of my former jobs, a bicycle courier. I wanted to create an app that was easy to look at and intuitive. The app is built using Angular and is optimised for smartphone use. The backend is built with Node.js and uses the Sequelize ORM to perform CRUD operations on a MySQL database.

![IMG_1143](https://user-images.githubusercontent.com/1414728/195002403-92a42911-2fa6-4196-9f0c-a2bc01f54cce.jpeg)...![IMG_1144](https://user-images.githubusercontent.com/1414728/195002418-828fb986-f4a0-4be4-b5f8-e0661dc5f94c.jpeg)

## Usage

- Visit https://antieatingactivist.github.io/Courier-client/ for a demo. When app is unable to connect to a back end, a demo driver will be selectable, and data will be replaced with demo data from a built in JSON file.

- Clone this repository `git clone <repo address>`
- Move into cloned directory `cd Courier-client`
- Install dependencies `npm install`
- Set up environement variables by renaming .env.EXAMPLE to .env and adding your mySQL username and password.
- Add new database to mySQL `CREATE DATABASE courier_db;`
- Start server `npm start`
- Navigate to http://localhost:4200
