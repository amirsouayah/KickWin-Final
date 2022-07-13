const router = require("express").Router();
const stadeCtrl = require("../controllers/stadeCtrl");

router.post("/create", stadeCtrl.createStadium);
router.put("/update/:id", stadeCtrl.updateStadium);
router.delete("/delete/:id", stadeCtrl.deleteStadium);
router.get("/search", stadeCtrl.searchStadium);
router.get("/search/:id", stadeCtrl.getStadium);

module.exports = router;
