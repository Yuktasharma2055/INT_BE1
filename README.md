# INT_BE1

## -Important Note

MongoDB connection is hardcoded as :

```sh
mongodb://localhost:27017/myCoins
```

> Also the server port is running at :5001
> Make sure to connect to MongoDB on your own. To do so :
> -You should either use 'mongoDB Atlas' as a cloud mongoDB storage or a 'MongoDB Compass' application as a local mongoDB storage with easier GUI. In our `index.js` file , we used connection string as:

```sh
mongoose.connect(
  "mongodb://localhost:27017/myCoins",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);
```

> And inside 'MongoDB Compass' we make a new connection with the same connection string which was:

```sh
mongodb://localhost:27017/myCoins
```

## Getting Started

This repository donot leads to production level application. This is a general MERN task .

## Tech & Tools

MERN development tools were used for this applications
namely ,

- MongoDB is a non-relational database used to store the coin data in this application
- Express is a back end web application framework for Node.js
- React is used to develop frontend for this app
- Node is our back-end JavaScript runtime environment

## Installation

Since this project will hold both the client application and the server application (frontend and backend server running simultaneously) there will be node modules in two different places. First run `npm install` from the root.
After this you will run `npm run-script install-all` from the root.
From now on run this command anytime you want to install all modules again. s

## File structure

##### `frontend` - Holds the client application

- ##### `public` - This holds all of our static files
- ##### `src`
  - ##### `components` - This folder holds all of the different components that will make up our views
  - ##### `App.js` - This is what renders all of our browser routes and different views
  - ##### `index.js` - This is what renders the react app by rendering App.js, should not change
- ##### `package.json` - Defines npm behaviors and packages for the client
- ##### `.gitignore` - Tells git which files to ignore

##### `backend` - Holds the server application

- ##### `routes` - This holds our API routes associations for each unique url for backend
- ##### `buy_database.js` - These hold our database model
- ##### `server.js` - Defines server and databases

##### `package.json` - Defines npm behaviors and packages for server

##### `.gitignore` - Tells git which files to ignore

##### `README` - This file!
