import express from 'express';
import { router } from './routes';
const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'It\'s working'})
})

app.use(express.json())
app.use(router)

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server listening on port ${port}`))
