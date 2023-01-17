import express from 'express';
import { ProductModel } from '../models/product';
import { verifyUser } from '../auth/jwt_auth';

const productmodel = new ProductModel();

// index, show, create endpoints

const index = async (_req: express.Request, res: express.Response) => {
	const allProducts = await productmodel.index();
	res.json(allProducts);
};

const show = async (req: express.Request, res: express.Response) => {
	const id = req.params.id;

	const showProductById = await productmodel.show(id);
	res.json(showProductById);
};

const create = async (req: express.Request, res: express.Response) => {
	const item = req.body;
	console.log('Product create endpoint request body', item);
	await productmodel.create(item);
	res.sendStatus(201);
};

const productRoutes = (app: express.Application) => {
	app.get('/product', index);
	app.get('/product/:id', show);
	app.post('/product', express.json(), verifyUser, create);
};

export default productRoutes;
