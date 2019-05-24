const express = require("express");
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
