const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute')

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

userRoute(app)

app.get('/', (req, res) => res.send('Ola mundo pelo Express!'))

app.listen(port, () => console.log('Api rodando na porta 3000'));