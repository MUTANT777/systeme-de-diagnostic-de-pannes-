const router = require("express").Router();
const { findIssue } = require("../controllers/diagnostic");
router.post("/", findIssue);

module.exports = router;
