const router = require("express").Router();

const { getAllContacts, createContact, createContacts } = require("./contactController");

router.get("/", getAllContacts);
router.post("/", createContacts);
// router.get('/:id')
// router.put('/:id')
// router.delete('/delete')

module.exports = router;
