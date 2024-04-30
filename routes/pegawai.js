const router = require("express").Router();

router.get("/pegawai", (_, res) => {
  res.json({
    status: true,
    message: "ini method get pegawai",
  });
});

router.post("/pegawai", (_, res) => {
  res.json({
    status: true,
    message: "ini method post pegawai",
  });
});

router.put("/pegawai", (_, res) => {
  res.json({
    status: true,
    message: "ini method put pegawai",
  });
});

router.delete("/pegawai", (_, res) => {
  res.json({
    status: true,
    message: "ini method delete pegawai",
  });
});

module.exports = router;
