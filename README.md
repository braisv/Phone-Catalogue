
<p align="center">
  <img src="https://fontmeme.com/permalink/200213/9a6bb023626c60c3bf9ae54ce89de970.png" alt="fuente-alata" border="0">
</p>


# INTRODUCTION
This is a simple app, with 2 views and a Rest API with 1 endpoint, done with Node JS, Express, React, Redux, Hooks and SASS.


# INSTRUCTIONS
- Go to `/Rest API` folder and introduce the following command to run the Rest API:
`npm start`
- Now go to `/client` folder and introduce this last command and enjoy the application:
`yarn start`


# DOCKERS: INSTRUCTIONS
If you want to run the app with Dockers follow this steps:

- Go to `/Rest API` folder and introduce the following command to build image and container:
`docker build -t node-restapi .`
- Once built image and container, run the Rest API with the command:
`docker run -p 5000:5000 -d node-restapi`

- Now you have the Rest API running, go to `/client` folder and introduce the following command:
`docker build -t phone-catalogue .`
- Run this last command and enjoy the application:
 `docker run -p 3000:3000 phone-catalogue`


