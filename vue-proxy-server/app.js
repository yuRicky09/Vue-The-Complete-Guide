const express = require("express");

const app = express();
const port = 5000;

const students = [
  {
    name: "白銀會長",
    age: 18,
    sex: "男",
  },
  {
    name: "藤原書記",
    age: 18,
    sex: "女",
  },
  {
    name: "石上會計",
    age: 17,
    sex: "男",
  },
];

app.use((req, res, next) => {
  console.log("有人請求了以下網址", req.url);
  next();
});

app.get("/students", (req, res) =>
  res.status(200).json({
    status: "success",
    results: students.length,
    data: {
      students,
    },
  })
);

app.listen(port, () => console.log(`app listening on ${port} port!`));
