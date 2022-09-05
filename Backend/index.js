const express = require("express");
const mongo = require("mongoose");
const { reset } = require("nodemon");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config({ path:'./config.env' });

require("./db/connect");
app.use(cors());
app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("server is running !!!!! "));