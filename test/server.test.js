// Test the routes from server.js 

const {app} = require('../src/server');

// Import supertest so we can manage the app/server in tests properly
const request = require('supertest');

describe("Server root route exists and returns hello world", () => {
	test("Root route exists and returns status 200", async () => {
		const responseResult = await request(app).get("/");
		expect(responseResult.statusCode).toEqual(200);
	});

	test("Root route exists and returns hello world message", async () => {
		const response = await request(app).get("/");
		expect(response.body.message).toEqual("Hello world!");
	});
});