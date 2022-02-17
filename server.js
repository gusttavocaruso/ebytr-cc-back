const express = require('express');
const cors = require('cors');
const router = require('./routes');
const err = require('./layers/middlewares/error');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(err);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`On at ${PORT}!`))
