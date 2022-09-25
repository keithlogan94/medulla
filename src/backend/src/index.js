
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.send('Platform')
})

app.listen(3000)





