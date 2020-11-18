const router = require("express").Router();

const addressController  = require("./address/address_controller");
const childrenController = require("./childrens/childrens_controller");
const emotionalStateController = require("./emotional_state/emotional_state_controller");
const feedingController = require("./feeding/feeding_controller");
const health = require("./health/health_controller");
const sleep  = require("./sleep/sleep_controller");
const rateController = require("./rates/rates_controller");

// ADDRESS
router.post("/address", addressController.createAddressInfo);
router.patch("/address/:id", addressController.updateAddressInfo);
router.get("/address/:id", addressController.getAddressInfo);
router.delete("/address/:id", addressController.deleteAddressInfo);

// CHILDRENS
router.post("/childrens", childrenController.createChildren);
router.patch("/childrens/:id", childrenController.updateChildren);
router.get("/childrens", childrenController.getAll);
router.get("/childrens/:id", childrenController.getChildren);
router.get("/childrens_actives", childrenController.getActives);

// EMOTIONAL STATE
router.post("/emotional_state", emotionalStateController.createEmotionalStateInfo);
router.patch("/emotional_state/:id", emotionalStateController.updateEmotionalStateInfo);
router.get("/emotional_state/:id", emotionalStateController.getEmotionalStateInfo);
router.delete("/emotional_state/:id", emotionalStateController.deleteEmotionalStateInfo);

// FEEDING
router.post("/feeding", feedingController.createFeedingInfo);
router.patch("/feeding/:id", feedingController.updateFeedingInfo);
router.get("/feeding/:id", feedingController.getFeedingInfo);
router.delete("/feeding/:id", feedingController.deleteFeedingInfo);

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
router.get("/sleep/:id", sleep.getSleepInfo);
router.delete("/sleep/:id", sleep.deleteSleepInfo);

module.exports = router;