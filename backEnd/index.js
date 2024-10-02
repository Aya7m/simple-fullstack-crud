
import express from 'express'
import postRouter from './src/modules/posts/posts.routes.js'
import connection from './DB/connection.js'
import cors from 'cors'
const app = express()
const port =process.env.PORT || 3000
app.use(cors());
app.use(express.json())

app.use('/posts',postRouter)


connection

app.use('*', (req, res) => res.status(404).send('Not Found'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))