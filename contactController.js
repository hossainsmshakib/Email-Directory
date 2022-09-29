const contacts = require("./Contacts");

exports.getAllContacts = (req, res) => {
  res.json(contacts.getAllContacts());
};

exports.createContacts = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = contacts.createContacts({
    name,
    phone,
    email,
  });

  res.json(contact);
};
