// Import express 
const express = require('express');

// Make an instance of express as a customisable server 
const app = express();

const PORT = process.env.PORT || 3000;
// Sometimes WSL is quirky, needs this: 
// const HOST = '0.0.0.0';

app.get("/", (request, response) => {
	response.json({
		message:"Hello world!"
	});
});

module.exports = {
	app, PORT
}
