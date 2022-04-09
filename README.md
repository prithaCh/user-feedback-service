# user-feedback-service

- [user-feedback-service](#user-feedback-service)
  - [Description](#description)
  - [Pre-requisite](#pre-requisite)
  - [To run the application](#to-run-the-application)
  - [Build docker image and run locally](#build-docker-image-and-run-locally)
  - [Run user-feedback-service docker container from DockerHub](#run-user-feedback-service-docker-container-from-dockerhub)
  - [Tech stack](#tech-stack)
  - [TODO](#todo)

## Description

User feedback service exposes API's to capture user feedback for one or more events

1. Create user feedback
2. Delete user feedback
3. Modify user feedback
4. Retrieve user feedback

`routes.js` file contains the list of REST endpoints
Front-end UI / mobile apps can consume the exposed backend endpoints from this micro-service

## Pre-requisite

1. Mongo DB backend
2. npm packages - express, mongoose, cors

---

## To run the application

1. Clone the git repository
`git clone <https/ssh>:raghavendrarao4/user-feedback-service.git`
2. Install npm packages - express, mongoose, cors
Run `npm install`
3. Run `node server.js` from command prompt
4. Verify the application on http://localhost:8082

---

## Build docker image and run locally

1. Run `docker build . -t <user-name>/user-feedback-service`

2. Run `docker run -p 8082:8082 -d <user-name>/user-feedback-service`

3. Verify the application on http://localhost:8082/

Note: Replace `<user-name>` with your desired value.

---

## Run user-feedback-service docker container from DockerHub

1. Start your docker server (docker desktop or minikube)
2. Pull the user-feedback-service docker image from [DockerHub](https://hub.docker.com/repository/docker/pranab698/user-feedback-service/tags?page=1&ordering=last_updated) \
`docker pull pranab698/user-feedback-service:latest`

3. Run \
`docker run -p 8082:8082 -d pranab698/user-feedback-service`

4. Verify the application on http://localhost:8082/

---

## Tech stack

- Express
- Mongo DB
- Mongoose

---

## TODO

- App is verified locally, yet to be deployed & tested on cloud environment.
