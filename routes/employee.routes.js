module.exports = app => {
    const ext = process.env.EXT+'/employee';
    const employeeController = require('../controllers/employee.controller');
    app.post(ext, employeeController.createEmployee);
    app.get(ext, employeeController.getAllEmployees);
    app.get(ext+'/salary/max', employeeController.getHighestPaidEmployees);
    app.get(ext+'/salary/average/0', employeeController.getAverageSalaryOfTypeZero);
};
