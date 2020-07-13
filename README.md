# backend_node_graphql_blog
Backend API for a Blog App using the following technology stack: PostgresQL Database, GraphQL Apollo Server for API requests, Node Js Runtime and Express Backend Frameworbuilt using Typescript

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
create a database in your local postgres and edit knexfile.ts and update it with your own database configuration (database name, host, username and password)

cd into the directry that contains the knexfile.ts and enter the following commands

```bash
npx knex migrate:latest
npx knex seed:run
```

# Usage
Run this command to start a development server using nodemon

```bash
npm run dev
```
This runs your local server.

Enter the URL of the local server on your browser and enter this command on the graphiql client user interface to test if the app is working
```bash
{
    posts {
        id
        title
        content
        likes
    }
}
```
If you see the output below, then this confirms the app is working
```bash
{
  "data": {
    "posts": [
      {
        "id": 1,
        "title": "Fullstack graphql app",
        "content": "lorem ipsum lorem ipsun",
        "likes": "0"
      },
      {
        "id": 2,
        "title": "Fullstack graphql app",
        "content": "lorem ipsum lorem ipsun",
        "likes": "0"
      },
      {
        "id": 3,
        "title": "Postgres graphql app",
        "content": "lorem ipsum lorem ipsun",
        "likes": "0"
      },
      {
        "id": 4,
        "title": "Node graphql app",
        "content": "lorem ipsum lorem ipsun",
        "likes": "0"
      },
      {
        "id": 5,
        "title": "React graphql app",
        "content": "lorem ipsum lorem ipsun",
        "likes": "0"
      }
    ]
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
