const express = require('express');
const cors = require('cors');
const router = require('./routes');
const err = require('./layers/middlewares/error');
const corsAllw = require('./layers/middlewares/corsPermission');

const app = express();
app.use(express.json());
app.use(corsAllw, cors());
app.use(router);
app.use(err);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`On at ${PORT}!`))

/*
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'https://ebytr-cc-front.vercel.app');
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use(cors({
  origin: 'https://ebytr-cc-front.vercel.app/',
  methods: ['POST', 'GET', 'PUT', 'DELETE']
}));
*/
