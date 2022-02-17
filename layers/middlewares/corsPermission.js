module.exports = ((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'https://ebytr-cc-front.vercel.app');
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  next();
});
