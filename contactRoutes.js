const router = require("express").Router();

const {
  getAllContacts,
  createContacts,
  getContactsById,
  updateContactsById,
  deleteContact,
} = require("./contactController");

router.get("/", getAllContacts);
router.post("/", createContacts);
router.get("/:id", getContactsById);
router.put("/:id", updateContactsById);
router.delete("/delete", deleteContact);

module.exports = router;
