const mongoose = require('mongoose');
const employeesSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: String
});
module.exports = mongoose.model('Employees', employeesSchema)

