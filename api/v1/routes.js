const router = require("express").Router();
const pass = require("./users/auth");

const childrenController = require("./childrens/childrens_controller");
const rateController = require("./rates/rates_controller");
const userController = require("./users/users_controller");

// CHILDRENS
router.post("/childrens", childrenController.createChildren);
router.patch("/children/:id", childrenController.updateChildren);
router.get("/childrens", childrenController.getAll);
router.get("/children/:id", childrenController.getChildren);
router.get("/actives", childrenController.getActives);

// RATES
router.post("/rates", rateController.createRate);
router.patch("/rate/:id", rateController.updateRate);
router.get("/rates", rateController.getAll);
router.get("/rate/:id", rateController.getRate);
router.delete("/rate/:id", rateController.deleteRate);

// USERS
router.get("/users/:id", userController.getUser);
router.patch("/users/:id", userController.updateUser);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/login", userController.logIn);

module.exports = router;
