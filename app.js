//require('dotenv').config();
const express = require("express");
const app = express();
const routes = require("./routes");
const routes2 = require("./routes/murid");
const routes3 = require("./routes/mahasiswa");
const routes4 = require("./routes/dekan");
const routes5 = require("./routes/guru");
const routes6 = require("./routes/pekerja");
const routes7 = require("./routes/matapelajaran");
const routes8 = require("./routes/matakuliah");
const routes9 = require("./routes/pegawai");
const routes10 = require("./routes/nilai");
//app.use(express.json());

app.use([
  routes,
  routes2,
  routes3,
  routes4,
  routes5,
  routes6,
  routes7,
  routes8,
  routes9,
  routes10,
]);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
