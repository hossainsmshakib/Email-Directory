const express = require('express');
const morgan = require('morgan')


const contactRoutes = require("./contactRoutes");

const app = express();
app.use(morgan("dev"));

app.use("./Contacts", contactRoutes);

app.get("*", (req, res) => {
  res.send("<h1>Please use the correcte routes</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})