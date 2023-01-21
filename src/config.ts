/* eslint-disable @typescript-eslint/no-non-null-assertion */
import dotenv from 'dotenv';
dotenv.config();

const {
	PORT,
	LOCALHOST,
	PG_PORT,
	PG_USERNAME,
	PG_PASSWORD,
	PG_DATABASE,
	NODE_ENV,
	TEST_DATABASE,
	ACCESS_TOKEN_SECRET,
	TEST_BEARER_TOKEN,
	MASK_PASSWORD,
	ROUNDS,
} = process.env;

const SERVER_PORT = PORT as unknown as number;
const DB_PORT = PG_PORT as unknown as number;
const HOST = LOCALHOST!; //as string;
const TOKEN_SECRET = ACCESS_TOKEN_SECRET!; //as string
const TEST_TOKEN = TEST_BEARER_TOKEN!;
const SALTROUNDS = ROUNDS!;
const PEPPER = MASK_PASSWORD!;

export {
	SERVER_PORT,
	HOST,
	DB_PORT,
	PG_USERNAME,
	PG_PASSWORD,
	PG_DATABASE,
	NODE_ENV,
	TEST_DATABASE,
	TOKEN_SECRET,
	TEST_TOKEN,
	PEPPER,
	SALTROUNDS,
};
