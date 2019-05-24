const express = require("express");
const app = express();

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.static("public"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
