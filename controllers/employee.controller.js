const EmployeeModel = require('../models/employee.model');
const { respond } = require('../util');

exports.createEmployee = (request, response) => {
    const newEmployee = new EmployeeModel(request.body);
    newEmployee.save((err, data) => respond(err, data, request, response));
};

exports.getAllEmployees = (request, response) => EmployeeModel.find({}, (err, data) => respond(err, data, request, response));

exports.getHighestPaidEmployees = (request, response) => EmployeeModel.find({}).sort({ 'salary': 'descending' }).exec((err, data) => respond(err, data, request, response));

exports.getAverageSalaryOfTypeZero = (request, response) => EmployeeModel.aggregate().group({ _id: null, salary: { $avg: '$salary' }  }).exec((err, data) => respond(err, data, request, response));

exports.updateEmployee = (request, response) => EmployeeModel.findByIdAndUpdate(request.params._id, { $set: request.body }, { new: true, runValidators: true }, (err, data) => respond(err, data, request, response));

exports.deleteEmployee = (request, response) => EmployeeModel.findByIdAndRemove(request.params._id, (err, data) => respond(err, data, request, response));
