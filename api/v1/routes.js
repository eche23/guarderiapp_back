const router = require("express").Router();
const pass = require("./users/auth");

const childrenController = require("./childrens/childrens_controller");
const rateController = require("./rates/rates_controller");
const userController = require("./users/users_controller");

// CHILDRENS
router.post("/childrens", pass.authAdmin, childrenController.createChildren);
router.patch("/children/:id", pass.authAdmin, childrenController.updateChildren);
router.get("/childrens", pass.authAdmin, childrenController.getAll);
router.get("/children/:id", pass.authAdimnEmployee, childrenController.getChildren);
router.get("/actives", pass.authAdmin, childrenController.getActives);

// RATES
router.post("/rates", pass.authAdmin, rateController.createRate);
router.patch("/rate/:id", pass.authAdmin, rateController.updateRate);
router.get("/rates", pass.authAdimnEmployee, rateController.getAll);
router.get("/rate/:id", pass.authAdimnEmployee, rateController.getRate);
router.delete("/rate/:id", pass.authAdmin, rateController.deleteRate);

// USERS
router.get("/users/:id", pass.authAdmin, userController.getUser);
router.patch("/users/:id", pass.authAdmin, userController.updateUser);
router.post("/users", pass.authAdmin, userController.createUser);
router.delete("/users/:id", pass.authAdmin, userController.deleteUser);
router.post("/login", userController.logIn);

module.exports = router;
