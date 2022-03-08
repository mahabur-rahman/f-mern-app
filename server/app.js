const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn");
const router = require("./routes/auth");

// port || process.env
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

// listen
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
