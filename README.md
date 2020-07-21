# Backend for Upath's self studying dashboard
Backend API for Upath's self studying dashboard using the following technology stack: PostgresQL Database, GraphQL Apollo Server for API requests, Node Js Runtime and Express Backend Framework built using Typescript

# Production url
The URL endpoint that was deployed to heroku is: 

```bash
https://upathorg-dashboard-backend.herokuapp.com/graphql
```

If you want to run it on your localhost, then follow the following commands below
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
  students{
    firstName
    lastName
    email
    courses{
      title
      description
    }
  }
}
```
If you see the output below, then this confirms the app is working
```bash
{
  {
  "data": {
    "students": [
      {
        "firstName": "Tony",
        "lastName": "Stark",
        "email": "ironman@gmail.com",
        "courses": [
          {
            "title": "Node Crash Course",
            "description": "Web dev Backend"
          },
          {
            "title": "GraphQL Apollo server course",
            "description": "Backend web dev/API"
          }
        ]
      },
      {
        "firstName": "Steve",
        "lastName": "Rodgers",
        "email": "captainamerica@gmail.com",
        "courses": [
          {
            "title": "GraphQL Apollo server course",
            "description": "Backend web dev/API"
          }
        ]
      },
      {
        "firstName": "Thor",
        "lastName": "Odinson",
        "email": "godofthunder@gmail.com",
        "courses": [
          {
            "title": "GraphQL Apollo server course",
            "description": "Backend web dev/API"
          },
          {
            "title": "Node Crash Course",
            "description": "Web dev Backend"
          }
        ]
      },
      {
        "firstName": "Doctor",
        "lastName": "Strange",
        "email": "drstrange@gmail.com",
        "courses": []
      }
    ]
  }
}
```

## Adding Data to the database table
Enter the command below in the graphql test client

```bash

 mutation {
  createStudent(
    firstName: "Peter"
    lastName: "Parker"
    username: "spiderman"
    email: "spiderman@gmail.com"
  ){
    success
    message
    student{
      firstName
      lastName
      email
    }
  }
}
```

The following results should be returned
```bash
{
  "data": {
    "createStudent": {
      "success": true,
      "message": "student Created Successfully",
      "student": {
        "firstName": "Doctor",
        "lastName": "Strange",
        "email": "drstrange@gmail.com"
      }
    }
  }
}
```

## Updating Data in the database table
Enter the command below in the graphql test client

```bash

 mutation {
  updateStudent(
    id: 4
    username: "spiderman_updated"
    email: "spiderman@gmail.com"
  ){
    success
    message
    student{
      firstName
      lastName
      email
    }
  }
}
```

## Deleting Data from the database

Enter the following command to delete data from the database
```bash
mutation {
  deleteStudent(id: 2){
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
