const express = require("express");
const {
  getAllContents,
  getContent,
  createContent,
  updateContent,
  deleteContent,
} = require("../controllers/contentController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/contents").get(getAllContents);

router.route("/content/:id").get(getContent);

router
  .route("/admin/content/create")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createContent);

router
  .route("/admin/content/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateContent)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteContent);

module.exports = router;
