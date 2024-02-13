const express = require("express");
const app = express();

// Import your mongoose connection
const connection = require("./config/connection");

// Create your PORT variable and get it ready for Heroku
const PORT = process.env.PORT || 3333;

// Require in your api_routes router
const { api_routes } = require("./routes");

// Open the middleware channel for json
app.use(express.json());

// Load in your api_routes and prefix them with '/api'
app.use("/api", [api_routes]);

// Use the connection 'on' method to wait until the database connection has established before running your app.listen
connection.on("open", () => {
    app.listen(PORT, () => console.log("Server started on port", PORT));
});
