// Import express 
const express = require('express');

// Make an instance of express as a customisable server 
const app = express();

const PORT = process.env.PORT || 3000;
// Sometimes WSL is quirky, needs this: 
// const HOST = '0.0.0.0';

// This lets us read POST'd JSON body data on the request 
app.use(express.json());

// ^
// |
// Configuration goes above
// Routes go below 
// |
// v


app.get("/", (request, response) => {
	response.json({
		message:"Hello world!"
	});
});

app.post("/", (request, response) => {
	// Just copy what the posted data is and 
	// attach it to response.body.received 
	response.json({
		received: request.body.message
	});
});

module.exports = {
	app, PORT
}
