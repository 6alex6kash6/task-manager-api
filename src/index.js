const express = require("express");
const app = express();
require("./db/mongoose");
const { User, Task } = require("./models");
const { userRouter, taskRouter } = require("./routers");

const port = process.env.PORT;

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () =>
  console.log(`Example app listening on port port ${port}`)
);
