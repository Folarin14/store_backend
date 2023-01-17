import { ProductModel } from '../models/product';
import { UserModel } from '../models/user';
// import { verifyPassword } from '../hashing/password_hash';

const userModel = new UserModel();
const productModel = new ProductModel();

describe('Check User Model', () => {
	it('checks that the index is defined', async () => {
		expect(userModel.index).toBeDefined();
	});

	it('checks if you can successfully create a new user', async () => {
		const result = await userModel.create({
			firstName: 'Afolarin',
			lastName: 'Lawal',
			password: 'password123',
		});
		//@ts-ignore
		expect(result.first_name).toBe('Afolarin');
	});

	it('checks if you can query user table by id', async () => {
		const result = await userModel.show('1');
		//@ts-ignore
		expect(result.first_name).toEqual('Afolarin');
	});

	it('checks if you can retrieve all the items in user table', async () => {
		const result = await userModel.index();
		expect(result).toHaveSize(1);
	});
});

describe('Check Product Model', () => {
	it('checks that the index is defined', async () => {
		expect(productModel.index).toBeDefined();
	});

	it('checks if the product was successfully created in database', async () => {
		const result = await productModel.create({
			name: 'milk',
			price: 10,
			category: 'grocery',
		});
		expect(result).toEqual({
			//@ts-ignore
			id: 1,
			name: 'milk',
			price: 10,
			category: 'grocery',
		});
	});

	it('checks if you can query by id', async () => {
		const result = await productModel.show('1');
		expect(result).toEqual({
			//@ts-ignore
			id: 1,
			name: 'milk',
			price: 10,
			category: 'grocery',
		});
	});

	it('checks if you can show all items in database', async () => {
		const result = await productModel.index();
		expect(result).toEqual([
			{
				//@ts-ignore
				id: 1,
				name: 'milk',
				price: 10,
				category: 'grocery',
			},
		]);
	});
});
