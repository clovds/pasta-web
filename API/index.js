const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { userRouter, cartRouter } = require("./routers");
const bearerToken = require("express-bearer-token");
const port = process.env.PORT || 2000;

// main app
const app = express();

// apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bearerToken());

// main route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Pasta API</h1>");
});

// alternate route
app.use("/users", userRouter);
app.use("/cart", cartRouter);

app.listen(port, () => console.log(`Connected to Port ${port}`));
