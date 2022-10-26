const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require("./data.json");
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.id === id);
  console.log(selectedCourse);
  res.send(selectedCourse);
});

app.get("/checkout/:id", (req, res) => {
  const id = req.params.id;
});

app.listen(port, () => {});
