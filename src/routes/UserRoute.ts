import express from 'express';
import { signUser, verifyUser } from '../auth/jwt_auth';
import { UserModel } from '../models/user';

//Index, Show, Create endpoints

const usermodel = new UserModel();

const index = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const allUsers = await usermodel.index();
	res.json(allUsers);
};

const show = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	const id = req.params.id;
	const showUserById = await usermodel.show(id);
	res.json(showUserById);
};

const create = async (
	req: express.Request,
	res: express.Response
): Promise<void> => {
	// unpack the request to get the item
	const item = req.body;
	const firstName = item.firstName;
	const lastName = item.lastName;
	// const userPassword = item.password;

	const accessToken = signUser({
		firstName: firstName,
		lastName: lastName,
		admin: true,
	});
	await usermodel.create(item);
	res.set('authorization', `Bearer ${accessToken}`).sendStatus(201);
};

const userRoutes = (app: express.Application): void => {
	app.get('/user', verifyUser, index);
	app.get('/user/:id', verifyUser, show);
	app.post('/user', express.json(), create);
};

export default userRoutes;
