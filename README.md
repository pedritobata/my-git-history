# Commit Explorer

> Web application for exploring the commits made to any branch in any repository from any Github user. This app was built with Node.js, Typescript, React.js & Redux.

You can visit [the deployed version](https://mygithubhistory.herokuapp.com) hosted in Heroku 

![screenshot](https://github.com/pedritobata/my-git-history/blob/master/screenshot-2020-12-10-21.51.49.png)

## Features

- See all commits from a given repo, branch and user sorted by date
- Switch between repos and branches for any given user
- Search for repos and branches by user name. 
- Link to Github commit details pages
- link to user profile by clicking on avatar
- Refresh commits results by clicking Refresh button


## Usage

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
LOG_LEVEL= debug
CLIENT_ID= <your github client id>
CLIENT_SECRET= <your github client secret>
```

Create a .env file in the frontend directory and add the following to avoid a react-scripts jest dependency issue

```
SKIP_PREFLIGHT_CHECK=true
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
# In the project root run this command
npm run dev

# Run backend only
# In the project root run this command
npm run server
```

