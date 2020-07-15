# Backend for Upath's self studying dashboard
Backend API for Upath's self studying dashboard using the following technology stack: PostgresQL Database, GraphQL Apollo Server for API requests, Node Js Runtime and Express Backend Framework built using Typescript

# Localhost setup
```bash
npm install
```
This installs the npm dependencies in the package.json file

```bash
npm install -g nodemon
```
This installs nodemon globally (optional: for some users you need to add sudo before the npm install)

# Database setup
The databse created is hosted on heroku

# Usage
Run this command to start a development server using nodemon

```bash
npm run dev
```
This runs your local server.

Enter the URL of the local server on your browser and enter this command on the graphiql client user interface to test if the app is working
```bash

{
  users {
   firstName
    lastName
    email
    username
    password
    
  }
}
```
If you see the output below, then this confirms the app is working
```bash
{
  "data": {
    "users": [
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@gmail.com",
        "username": "johndoe",
        "password": "admin"
      },
      {
        "firstName": "Iron",
        "lastName": "Man",
        "email": "tonystark@gmail.com",
        "username": "tonystark",
        "password": "avengers"
      },
      {
        "firstName": "Thor",
        "lastName": "Odinson",
        "email": "thorodinson@gmail.com",
        "username": "thorodinson",
        "password": "strongestavenger"
      }
    ]
  }
}
```

## Adding Data to the database table
Enter the command below in the graphql test client

```bash

 mutation {
   createUser(
     firstName: "Thor"
    lastName: "Odinson"
    username: "thorodinson"
    email: "thorodinson@gmail.com"
    password: "strongestavenger"
  ) {
    firstName
    lastName
    username
    email
   }
 }
```

## Deleting Data from the database

Enter the following command to delete data from the database
```bash
mutation {
  deleteUser(id: 2){
    success
    message
    user{
      id
      firstName
    }
  }
}
```

# Compilation

When you are ready to compile your typescript project to Javascript, run this command
```bash
npm run build
```
This builds your project into dist folder

# Test the final compiled files
When you are ready to test the final compiled files, run this command
```bash
npm run start
```

### Note: The src folder contains the typescript files while the dist folder contains the compiled javascript files
