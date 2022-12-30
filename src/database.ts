import {
	PG_DATABASE,
	PG_USERNAME,
	PG_PASSWORD,
	HOST,
	NODE_ENV,
	TEST_DATABASE,
} from './config.js';
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
	host: HOST,
	database: NODE_ENV === 'development' ? PG_DATABASE : TEST_DATABASE,
	user: PG_USERNAME,
	password: PG_PASSWORD,
});
console.log('Printing Node env used', NODE_ENV);

export default pool;
