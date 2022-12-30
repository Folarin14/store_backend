import pool from '../database';
//const chalk = import('chalk')

export type book = {
	//id: number;
	title: string;
	author: string;
	total_pages: number;
	type: string;
	summary: string;
};

export class BookStore {
	async index(): Promise<book[]> {
		try {
			const conn = await pool.connect();
			const sql = 'SELECT * FROM books';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot execute query: ${err}`);
		}
	}

	async show(id: string): Promise<book> {
		try {
			const conn = await pool.connect();
			const sql = 'SELECT title FROM books WHERE id=($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot execute query using ${id} - ${err}`);
		}
	}

	async create(b: book): Promise<book> {
		try {
			const conn = await pool.connect();
			const sql =
				'INSERT INTO books (title, author, total_pages, type, summary) VALUES ($1, $2, $3, $4, $5) RETURNING *';
			const result = await conn.query(sql, [
				b.title,
				b.author,
				b.total_pages,
				b.type,
				b.summary,
			]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot execute query using ${err}`);
		}
	}

	async delete(id: string): Promise<book> {
		try {
			const conn = await pool.connect();
			const sql = 'DELETE FROM books WHERE id=($1)';
			const result = await conn.query(sql, [id]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot execute query using ${err}`);
		}
	}
}

export default BookStore;
