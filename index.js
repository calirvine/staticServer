const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use(express.static("public"));

const PORT = process.env.PORT || 5060;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
