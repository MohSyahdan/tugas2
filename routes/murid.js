const router = require("express").Router();

router.get("/murid", (_, res) => {
  res.json({
    status: true,
    message: "ini method get murid",
  });
});

router.post("/murid", (_, res) => {
  res.json({
    status: true,
    message: "ini method post murid",
  });
});

router.put("/murid", (_, res) => {
  res.json({
    status: true,
    message: "ini method put murid",
  });
});

router.delete("/murid", (_, res) => {
  res.json({
    status: true,
    message: "ini method delete murid",
  });
});

module.exports = router;
