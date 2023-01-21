import express from 'express';
import { SERVER_PORT, HOST } from './config';
import userRoutes from './routes/UserRoute';
import productRoutes from './routes/ProductRoute';
import orderRoutes from './routes/orderRoute';
import cors from 'cors';

const app = express();

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};

app.get('/', (req: express.Request, res: express.Response): void => {
	res.send('Root Endpoint Working...');
});

app.use(cors(corsOptions));
userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(SERVER_PORT, HOST, (): void => {
	console.log(`Running on http://${HOST}:${SERVER_PORT}`);
});

export default app;
