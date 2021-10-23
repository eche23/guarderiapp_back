const router = require("express").Router();
const pass = require("./users/auth");

const addressController = require("./address/address_controller");
const childrenController = require("./childrens/childrens_controller");
const rateController  = require("./rates/rates_controller");
const expenseControler = require("./expenses/expenses_controller");

// CHILDRENS
router.post("/childrens", childrenController.createChildren);
router.patch(
  "/childrens/:id",
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
  childrenController.getActives
);

// EMOTIONAL STATE
router.post(
  "/emotional_state",
  emotionalStateController.createEmotionalStateInfo
);
router.patch(
  "/emotional_state/:id",
  emotionalStateController.updateEmotionalStateInfo
);
router.get(
  "/emotional_state/:id",
  emotionalStateController.getEmotionalStateInfo
);
router.delete(
  "/emotional_state/:id",
  emotionalStateController.deleteEmotionalStateInfo
);

// FEEDING
router.post("/feeding", feedingController.createFeedingInfo);
router.patch(
  "/feeding/:id",
  feedingController.updateFeedingInfo
);
router.get("/feeding/:id", feedingController.getFeedingInfo);
router.delete(
  "/feeding/:id",
  feedingController.deleteFeedingInfo
);

// HEALTH
router.post("/health", health.createHealthInfo);
router.patch("/health/:id", health.updateHealthInfo);
router.get("/health/:id", health.getHealthInfo);
router.delete("/health/:id", health.deleteHealthInfo);

// RATES
router.post("/rates", rateController.createRate);
router.patch("/rates/:id", rateController.updateRate);
router.get("/rates", rateController.getAll);
router.get("/rates/:id", rateController.getRate);
router.delete("/rates/:id", rateController.deleteRate);

// SLEEP
router.post("/sleep", sleep.createSleepInfo);
router.patch("/sleep/:id", sleep.updateSleepInfo);
router.get(
  "/sleep/:id",
  sleep.getSleepInfo
);
router.delete("/sleep/:id", sleep.deleteSleepInfo);

// USERS
router.get("/users/:id", userController.getUser);
router.patch("/users/:id", userController.updateUser);
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/login", userController.logIn);


module.exports = router;

// EXPENSES
router.post("/expenses", expenseControler.createDB);
router.patch("/expenses", expenseControler.updateExpenses);
/* router.get("/expenses", expenseControler.getAll);
router.get("/rate/:id", expenseControler.getRate);
router.delete("/rate/:id", expenseControler.deleteRate); */

module.exports = router;
