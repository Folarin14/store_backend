import dotenv from 'dotenv';
dotenv.config();

const {
	PORT,
	HOST,
	PG_USERNAME,
	PG_PASSWORD,
	PG_DATABASE,
	NODE_ENV,
	TEST_DATABASE,
} = process.env;

export {
	PORT,
	HOST,
	PG_USERNAME,
	PG_PASSWORD,
	PG_DATABASE,
	NODE_ENV,
	TEST_DATABASE,
};
