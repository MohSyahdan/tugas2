const router = require("express").Router();

router.get("/matakuliah", (_, res) => {
  res.json({
    status: true,
    message: "ini method get matakuliah",
  });
});

router.post("/matakuliah", (_, res) => {
  res.json({
    status: true,
    message: "ini method post matakuliah",
  });
});

router.put("/matakuliah", (_, res) => {
  res.json({
    status: true,
    message: "ini method put matakuliah",
  });
});

router.delete("/matakuliah", (_, res) => {
  res.json({
    status: true,
    message: "ini method delete matakuliah",
  });
});

module.exports = router;
