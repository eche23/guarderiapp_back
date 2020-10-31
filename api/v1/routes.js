const router = require("express").Router();
const childrenController = require("./childrens/childrens_controller");

router.post("/childrens", childrenController.createChildren);
router.patch("/childrens/:id", childrenController.updateChildren);
router.get("/childrens", childrenController.getAll);
router.get("/children/:id", childrenController.getChildren);
router.get("/actives", childrenController.getActives);

module.exports = router;