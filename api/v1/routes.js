const router = require("express").Router();
const pass = require("./users/auth");

const addressController = require("./address/address_controller");
const childrenController = require("./childrens/childrens_controller");
const emotionalStateController = require("./emotional_state/emotional_state_controller");
const feedingController = require("./feeding/feeding_controller");
const health = require("./health/health_controller");
const rateController = require("./rates/rates_controller");
const sleep = require("./sleep/sleep_controller");
const userController = require("./users/users_controller");

// ADDRESS
router.post("/address", pass.authAdmin, addressController.createAddressInfo);
router.patch(
  "/address/:id",
  pass.authAdmin,
  addressController.updateAddressInfo
);
router.get("/address/:id", pass.authEmployee, addressController.getAddressInfo);
router.delete(
  "/address/:id",
  pass.authAdmin,
  addressController.deleteAddressInfo
);

// CHILDRENS
router.post("/childrens", pass.authAdmin, childrenController.createChildren);
router.patch(
  "/childrens/:id",
  pass.authAdmin,
  childrenController.updateChildren
);
router.get("/childrens", pass.authAdminEmployee, childrenController.getAll);
router.get(
  "/childrens/:id",
  pass.authAdminEmployee,
  childrenController.getChildren
);
router.get(
  "/childrens_actives",
  pass.authEmployee,
  childrenController.getActives
);

// EMOTIONAL STATE
router.post(
  "/emotional_state",
  pass.authAdmin,
  emotionalStateController.createEmotionalStateInfo
);
router.patch(
  "/emotional_state/:id",
  pass.authAdmin,
  emotionalStateController.updateEmotionalStateInfo
);
router.get(
  "/emotional_state/:id",
  pass.authEmployee,
  emotionalStateController.getEmotionalStateInfo
);
router.delete(
  "/emotional_state/:id",
  pass.authAdmin,
  emotionalStateController.deleteEmotionalStateInfo
);

// FEEDING
router.post("/feeding", pass.authAdmin, feedingController.createFeedingInfo);
router.patch(
  "/feeding/:id",
  pass.authAdmin,
  feedingController.updateFeedingInfo
);
router.get("/feeding/:id", pass.authEmployee, feedingController.getFeedingInfo);
router.delete(
  "/feeding/:id",
  pass.authAdmin,
  feedingController.deleteFeedingInfo
);

// HEALTH
router.post("/health", pass.authAdmin, health.createHealthInfo);
router.patch("/health/:id", pass.authAdmin, health.updateHealthInfo);
router.get("/health/:id", pass.authEmployee, health.getHealthInfo);
router.delete("/health/:id", pass.authAdmin, health.deleteHealthInfo);

// RATES
router.post("/rates", pass.authAdmin, rateController.createRate);
router.patch("/rates/:id", pass.authAdmin, rateController.updateRate);
router.get("/rates", pass.authEmployee, rateController.getAll);
router.get("/rates/:id", pass.authEmployee, rateController.getRate);
router.delete("/rates/:id", pass.authAdmin, rateController.deleteRate);

// SLEEP
router.post("/sleep", pass.authAdmin, sleep.createSleepInfo);
router.patch("/sleep/:id", pass.authAdmin, sleep.updateSleepInfo);
router.get(
  "/sleep/:id",
  pass.authEmployee,
  pass.authEmployee,
  sleep.getSleepInfo
);
router.delete("/sleep/:id", pass.authAdmin, sleep.deleteSleepInfo);

// USERS
router.get("/users/:id", pass.authAdmin, userController.getUser);
router.patch("/users/:id", pass.authAdmin, userController.updateUser);
router.post("/users", pass.authAdmin, userController.createUser);
router.delete("/users/:id", pass.authAdmin, userController.deleteUser);
router.post("/login", pass.authAdmin, userController.logIn);

module.exports = router;

