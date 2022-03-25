# user-feedback-service
User feedback service exposes API's to capture user feedback for one or more events
1. Create user feedback
2. Delete user feedback
3. Modify user feedback
4. Retrieve user feedback

routes.js file contains the list of REST endpoints
Front-end UI / mobile apps can consume the exposed backend endpoints from this micro-service

# Pre-requisite
1. Mongo DB backend
2. npm packages - express, mongoose, cors

# To run the application
1. Clone the git repository
2. Install npm packages - express, mongoose, cors
3. Run 'node server.js' from command prompt
4. View application endpoint at localhost:8082

App is verified locally, yet to be deployed & tested on cloud environment

# Tech stack
Express, Mongo DB, Mongoose