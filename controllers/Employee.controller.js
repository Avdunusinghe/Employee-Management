const Employee = require("../models/Employee.model");

const saveEmployee = (request, response) => {
  const { name, position, salary } = request.body;

  const employee = new Employee({
    name,
    position,
    salary,
  });

  employee
    .save()
    .then((createdEmployee) => {
      response.json(createdEmployee);
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

const getAllEmployeesDetails = async (request, response) => {
  try {
    const employees = await Employee.find();
    response.json(employees);
  } catch (error) {
    response.status(400).json(error);
  }
};

module.exports = { getAllEmployeesDetails, saveEmployee };
