import pool from '../database';

export type product = {
	name: string;
	price: number;
	category: string | null;
};

export class ProductModel {
	async index(): Promise<product[]> {
		try {
			const conn = await pool.connect();
			const query = 'SELECT * FROM Products';
			const result = await conn.query(query);
			conn.release();
			return result.rows;
		} catch (error) {
			throw new Error(`Cannot retrieve items in database - ${error}`);
		}
	}

	async show(id: string): Promise<product> {
		try {
			const conn = await pool.connect();
			const query = 'SELECT * FROM Products WHERE id =($1)';
			const result = await conn.query(query, [id]);
			conn.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(`Cannot retrieve items in database - ${error}`);
		}
	}

	async create(item: product): Promise<product> {
		//TODO: Token Required
		try {
			const conn = await pool.connect();
			const query =
				'INSERT INTO Products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
			const result = await pool.query(query, [
				item.name,
				item.price,
				item.category,
			]);
			conn.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(`Cannot create item in database - ${error}`);
		}
	}
}
