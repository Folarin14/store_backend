import supertest from 'supertest';
import app from '../server.js';
// import pool from '../database.js';
const request = supertest(app);

describe('Testing API Endpoint', (): void => {
	it('checks if the root endpoint is functioning', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});

	// it('Checks if the database connection is working', (): void => {
	// 	expect(
	// 		pool
	// 			.connect()
	// 			.then(() => console.log('Success'))
	// 			.catch(() => console.log('Failure'))
	// 	).toBe(Promise<void>);
	// });
});
