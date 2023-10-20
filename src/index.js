// This is where we run the server 

const {app, PORT} = require('./server');

app.listen(PORT, () => {
	console.log("Server is running on port: " + PORT);
});

