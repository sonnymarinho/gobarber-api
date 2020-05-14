import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => response.json({ message: 'ok' }));

app.listen(3333, () => {
  console.log('🚀 Server launched at port 3333!');
});
