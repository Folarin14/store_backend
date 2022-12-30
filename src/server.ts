import express from 'express';
import { PORT, HOST } from './config.js';

const SERVER_PORT = PORT as unknown as number;
const SERVER_HOST = HOST as string;

const app = express();
app.get('/', (req: express.Request, res: express.Response): void => {
	res.send('Root Endpoint Working...');
});

app.listen(SERVER_PORT, SERVER_HOST, (): void => {
	console.log(`Running on http://${HOST}:${PORT}`);
});

export default app;
