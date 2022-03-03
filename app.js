const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const connectionString = process.env.connectionString;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("MongoDb Connection Established");
});

app.use("/api/employee", require("./routes/Employee.route"));

app.listen(port, () => {
  console.log("Welcome Employee Management Api ");
});
