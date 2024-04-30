const router = require("express").Router();

router.get("/matapelajaran", (_, res) => {
  res.json({
    status: true,
    message: "ini method get matapelajaran",
  });
});

router.post("/matapelajaran", (_, res) => {
  res.json({
    status: true,
    message: "ini method post matapelajaran",
  });
});

router.put("/matapelajaran", (_, res) => {
  res.json({
    status: true,
    message: "ini method put matapelajaran",
  });
});

router.delete("/matapelajaran", (_, res) => {
  res.json({
    status: true,
    message: "ini method delete matapelajaran",
  });
});

module.exports = router;
