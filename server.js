const express = require('express');
const cors = require('cors');
const router = require('./routes');
const err = require('./layers/middlewares/error');

const app = express();
app.use(express.json());
app.use(router);
app.use(err);
app.use(cors({
  origin: 'https://ebytr-cc-front.vercel.app/' || 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE']
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`On at ${PORT}!`))
