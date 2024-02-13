# Mongodb-Social-Network-API

This is a backend API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB for the database, and Mongoose as the ODM.

## Features

- **User Management:**
  - Create a new user
  - Get all users
  - Get a user by ID
  - Update a user
  - Delete a user

- **Thought Management:**
  - Create a new thought
  - Get all thoughts
  - Get a thought by ID
  - Update a thought
  - Delete a thought

- **Reaction Management:**
  - Create a new reaction
  - Get all reactions
  - Get a reaction by ID
  - Update a reaction
  - Delete a reaction

## Installation

## Clone the repository:
git@github.com:raymondii/Mongodb-Social-Network-API.git

## Install dependencies:
npm install

## Start the server:
npm start

## Video Walkthrough
[Check out the video here](https://drive.google.com/file/d/1DRhBpCdLiiWc5tDIO8wvmUb_D1Q9ecbI/view?usp=sharing)

## API Documentation
The API endpoints are documented below:

# Users:

POST /api/users: Create a new user
GET /api/users: Get all users
GET /api/users/:userId: Get a user by ID
PUT /api/users/:userId: Update a user by ID
DELETE /api/users/:userId: Delete a user by ID

# Thoughts:

POST /api/thoughts: Create a new thought
GET /api/thoughts: Get all thoughts
GET /api/thoughts/:thoughtId: Get a thought by ID
PUT /api/thoughts/:thoughtId: Update a thought by ID
DELETE /api/thoughts/:thoughtId: Delete a thought by ID

# Reactions:

POST /api/reactions: Create a new reaction
GET /api/reactions: Get all reactions
GET /api/reactions/:reactionId: Get a reaction by ID
PUT /api/reactions/:reactionId: Update a reaction by ID
DELETE /api/reactions/:reactionId: Delete a reaction by ID

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
MIT License