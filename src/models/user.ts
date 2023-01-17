import pool from '../database';
import { hashPassword } from '../auth/password_hash';

export type user = {
	firstName: string;
	lastName: string;
	password: string;
};

export class UserModel {
	async index(): Promise<user[]> {
		//TODO: Token required
		try {
			const conn = await pool.connect();
			const query = 'SELECT * FROM Users';
			const result = await conn.query(query);
			conn.release();
			return result.rows;
		} catch (error) {
			throw new Error(`Cannot retrieve items in database - ${error}`);
		}
	}

	async show(id: string): Promise<user> {
		//TODO: Token Required
		try {
			const conn = await pool.connect();
			const query = 'SELECT * FROM Users WHERE id =($1)';
			const result = await conn.query(query, [id]);
			conn.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(`Cannot retrieve items in database - ${error}`);
		}
	}

	async create(item: user): Promise<user> {
		//TODO: Token Required
		//hash password
		const hashedPassword = await hashPassword(item.password);

		try {
			const conn = await pool.connect();
			const query =
				'INSERT INTO Users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *';
			const result = await conn.query(query, [
				item.firstName,
				item.lastName,
				hashedPassword,
			]);
			conn.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(`Cannot create item in database - ${error}`);
		}
	}
}
