import { PG_DATABASE, PG_USERNAME, PG_PASSWORD, HOST } from './dist/config.js';
// import { Pool } from 'pg';
import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool({
	host: HOST,
	database: PG_DATABASE,
	user: PG_USERNAME,
	password: PG_PASSWORD,
});

pool.connect().then((res) => console.log("Success:", res)).catch((err) => console.log("Failure:", err.message))

// console.log(conn.)

//const result = function test() {
	// try {
	// 	pool.connect()
	// 	console.log('Connected')
		
	// } catch (error) {
	// 	console.log("Error")
	// 	console.log(error)
		
	// }

	// }

// 	console.log("Failure:", failure)
// 	console.log("Success:", success)
	
// }

// console.log(result())
