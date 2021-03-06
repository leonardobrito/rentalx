import express from 'express'
import swaggerUiExpress from 'swagger-ui-express'
import { createConnection } from './database'
import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()
createConnection()

app.get('/', (_req, res) => {
  res.json({ message: 'It\'s working' })
})

app.use(express.json())
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile))
app.use(router)

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server listening on port ${port}`))
