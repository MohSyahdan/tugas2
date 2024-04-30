const router = require("express").Router();

router.get("/dekan", (_, res) => {
  res.json({
    status: true,
    message: "ini method get dekan",
  });
});

router.post("/dekan", (_, res) => {
  res.json({
    status: true,
    message: "ini method post dekan",
  });
});

router.put("/dekan", (_, res) => {
  res.json({
    status: true,
    message: "ini method put dekan",
  });
});

router.delete("/dekan", (_, res) => {
  res.json({
    status: true,
    message: "ini method delete dekan",
  });
});

module.exports = router;
