const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  email: String
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;
