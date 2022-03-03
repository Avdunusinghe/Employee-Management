const res = require("express/lib/response");
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

const updateEmployeeDetails = async (request, response) => {
  const employeeId = request.params.id;

  try {
    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).json("Cannot Find Employee");
    }

    const { name, position, salary } = request.body;

    const employeeObj = await Employee.findByIdAndUpdate(employeeId, {
      name,
      position,
      salary,
    });

    response.status(200).json("Employee has been  Update SuccessFully");
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const deleteEmployee = async (request, response) => {
  try {
    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).json("Cannot Find Employee");
    }

    const { name, position, salary } = request.body;

    const deleteEmployee = await Employee.findByIdAndDelete(employeeId);

    response.status(200).json("Employee has been Delete SuccessFully");
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  getAllEmployeesDetails,
  saveEmployee,
  updateEmployeeDetails,
  deleteEmployee,
};
