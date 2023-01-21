import express from 'express';
import { ProductModel } from '../models/product';
import { verifyUser } from '../auth/jwt_auth';

const productmodel = new ProductModel();

// index, show, create and update endpoints

const index = async (
	_req: express.Request,
	res: express.Response
): Promise<void> => {
	const allProducts = await productmodel.index();
	res.json(allProducts);
};

const show = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const id = req.params.id;

	const showProductById = await productmodel.show(id);
	res.json(showProductById);
};

const create = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const item = req.body;
	await productmodel.create(item);
	res.sendStatus(201);
};

const productRoutes = (app: express.Application): void => {
	app.get('/product', index);
	app.get('/product/:id', show);
	app.post('/product', express.json(), verifyUser, create);
};

export default productRoutes;
