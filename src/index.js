const express = require("express");
const app = express();
const cors = require("cors");
require("./db/mongoose");
const { User, Task } = require("./models");
const { userRouter, taskRouter } = require("./routers");

const port = process.env.PORT;

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));
app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () =>
  console.log(`Example app listening on port port ${port}`)
);

// git add
// git commit -m 'flag: add console log to file' <-
// git push origin master
