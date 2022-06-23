# Lap 2 Coding Challenge

## Requirements
- Your app should have a browser client allowing users to write a post with a title, a pseudonym and a body
- No login should be required to create a post or visit a post
- When a user hits 'publish', the post should be stored in a database and the client redirected to a show path
- The user should be able to access their post using that show path even after a server restart
- Edit and delete functionality is not required

## Installation & Usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to `api` folder.
* Run `npm install` to install dependencies.

### Usage

* Run `npm start` to launch server.
* Run `npm test` to launch test suite.
* Run `npm seedDev` to seed Dev Database.

### Bash Scripts

## `bash _scripts/startDev.sh`
- Starts client, api, and DB services.
- runs DB migrations.
- Seeds DB for the dev environment.
- Serves the client-side on localhost:8080 (127.0.0.1:8080).
- Serves the API on localhost:3000 (127.0.0.1:3000).

## `bash _scripts/teardown.sh`
- Stops all running services.
- Removes the containers.
- Removes the Volumes.
- Bang and the dev envionment is gone!.

## `bash _scripts/stop.sh`
- Stops the client, api, and DB services.

## Changelog

### client/index.html

[x] Initial Commit.

### client/static/css/index.css

[x] Reorganised folder structure.

[x] Initial Commit.

### client/static/js/index.js

[x] Reorganised folder structure.

[x] Initial Commit.

### api/controllers/posts.js

[x] Set `req` param as optional.

[x] Built Controller for posts.

### api/models/post.js

[x] Built Model for posts.

### api/routes/posts.js

[x] Corrected routing issue for `show` controller.

[x] Built Route for posts.

### api/server.js

[x] Set `req` param as optional.

[x] Implemented Express server.

### db/posts.sql

[x] Constructed database.

### docker-compose.yaml

[x] Created database for prod environment.

### docker-compose-dev.yaml

[x] Changed `POSTGRES_PASS` to `POSTGRES_PASSWORD` to fix DB authentication defect.

[x] Created database for dev environment.

### api/dbConfig/dev_seeds.sql

[x] Created database for dev environment.

### api/dbConfig/init.js

[x] Implemented DB connection.

### api/dbConfig/seedDev.js

[x] Implemented dev seed construction.

### _scripts/startDev.sh

[x] Implemented bash script.

### _scripts/teardown.sh

[x] Implemented bash script.

### _scripts/stop.sh

[x] Implemented bash script.

### api/package.json

[x] Added `--legacy-watch` argument to `dev` script so DB can be updated in the background.

[x] Added seedDev script to populate dev environment on build.

[x] Initialised NPM with required packages.

### .gitignore

[x] Added .gitignore.

### api/.gitignore

[x] Added .gitignore.

## Bugs

[ ] **client/static/js/postData.js** - BUG: Percent-encoded output instead of id value e.g 1 -> %7B1%7D (if id is manually assigned then selected post will show)
