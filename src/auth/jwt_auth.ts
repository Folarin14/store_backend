import { TOKEN_SECRET } from '../config';
import { sign, verify } from 'jsonwebtoken';
import express from 'express';

const verifyUser = function (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
): void {
	const auth = req.headers['authorization'];
	const token = auth?.split(' ')[1];
	if (!token) {
		res.sendStatus(401);
	} else {
		verify(token, TOKEN_SECRET, (err) => {
			if (err) {
				res.status(403).send('Token provided but invalid');
			}
			// req.body = user;
			// req.
			next();
		});
	}
};

const signUser = function (payload: object): string {
	const accessToken = sign(payload, TOKEN_SECRET);
	return accessToken;
};

export { verifyUser, signUser };
