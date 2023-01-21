import express from 'express';
import { OrderModel } from '../models/order';
import { verifyUser } from '../auth/jwt_auth';

const ordermodel = new OrderModel();

const index = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const allOrders = await ordermodel.index();
	res.json(allOrders);
};

const create = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const item = req.body;

	await ordermodel.create(item);
	res.sendStatus(201);
};

const show = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const id = req.params.id;

	const showOrderByUserID = await ordermodel.show(id);
	res.json(showOrderByUserID);
};

const update = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const item = req.body;
	const id = req.params.id;

	const updatedOrder = await ordermodel.update(id, item);
	res.json(updatedOrder);
};

const deleteOrder = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const id = req.params.id;

	const deletedOrder = await ordermodel.delete(id);
	res.json(deletedOrder);
};

const orderRoutes = (app: express.Application): void => {
	app.get('/order', verifyUser, index);
	app.get('/order/:id', verifyUser, show);
	app.post('/order', express.json(), verifyUser, create);
	app.put('/order/:id', express.json(), verifyUser, update);
	app.delete('/order/:id', verifyUser, deleteOrder);
};

export default orderRoutes;
