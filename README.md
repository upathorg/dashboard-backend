# Self Studying Student's Upath Dashboard

Backend Project for a student's self studying dashboard built using typescript, node, express, graphql and postgresQL database.

# Localhost setup
```bash
npm install
```
This installs the npm dependencies in the package.json file

```bash
npm install -g nodemon
```
This installs nodemon globally (optional: for some users you need to add sudo before the npm install)



# Usage
Run this command to start a development server using nodemon

```bash
npm run dev
```
This runs your local server.

Enter the URL of the local server on your browser and enter this command on the graphiql client user interface to test if the app is working
```bash
{
    greeting
}
```
If you see the output below, then this confirms the app is working
```bash
{
  "data": {
    "greeting": "Hello GraphQL World"
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