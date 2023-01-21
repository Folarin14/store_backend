import pool from '../database';

export type order = {
	productID: string;
	quantity: number;
	userID: string;
	status: string;
};

// index, show, create, update

export class OrderModel {
	async index(): Promise<order[]> {
		try {
			const conn = await pool.connect();
			const sql = 'SELECT * FROM Orders';
			const result = await conn.query(sql);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot retrieve items in database - ${err}`);
		}
	}
	/**
	 * This accepts user id rather than order id to display
	 * current order by user
	 */
	async show(user_id: string): Promise<order[]> {
		try {
			const conn = await pool.connect();
			const sql = 'SELECT * FROM Orders where user_id=($1)';
			const result = await conn.query(sql, [user_id]);
			conn.release();
			return result.rows;
		} catch (err) {
			throw new Error(`Cannot retrieve items in database - ${err}`);
		}
	}

	async create(item: order): Promise<order> {
		try {
			const conn = await pool.connect();
			const sql =
				'INSERT INTO Orders (product_id, quantity, user_id, order_status) VALUES ($1, $2, $3, $4) RETURNING *';
			const result = await conn.query(sql, [
				item.productID,
				item.quantity,
				item.userID,
				item.status,
			]);
			conn.release();
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot retrieve items in database - ${err}`);
		}
	}
	/**
	 * This allows authenticated users to update the order by order id
	 * This can be used for changing status or quantity columns
	 */
	async update(id: string, item: order): Promise<order> {
		const updatedQuantity = item.quantity;
		const updatedStatus = item.status;
		const conn = await pool.connect();
		try {
			const query =
				'UPDATE Orders SET quantity=($1), order_status=($2) WHERE id=($3) RETURNING *';

			const result = await conn.query(query, [
				updatedQuantity,
				updatedStatus,
				id,
			]);
			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot retrieve items in database - ${err}`);
		} finally {
			conn.release();
		}
	}

	async delete(id: string): Promise<order> {
		const conn = await pool.connect();
		try {
			const sql = 'DELETE FROM Orders WHERE id=($1) RETURNING *';
			const result = await conn.query(sql, [id]);

			return result.rows[0];
		} catch (err) {
			throw new Error(`Cannot retrieve items in database - ${err}`);
		} finally {
			conn.release();
		}
	}
}
