const router = require("express").Router();
const childrenController = require("./childrens/childrens_controller");
const rateController  = require("./rates/rates_controller");
const expenseControler = require("./expenses/expenses_controller");

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

// EXPENSES
router.post("/expenses", expenseControler.createDB);
router.patch("/expenses", expenseControler.updateExpenses);
/* router.get("/expenses", expenseControler.getAll);
router.get("/rate/:id", expenseControler.getRate);
router.delete("/rate/:id", expenseControler.deleteRate); */

module.exports = router;