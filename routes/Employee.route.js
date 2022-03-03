const express = require("express");
const router = express.Router();

const {
  getAllEmployeesDetails,
  saveEmployee,
  updateEmployeeDetails,
  deleteEmployee,
} = require("../controllers/Employee.controller");

//@route GET api/employee/all
//@desc Get All Employees
router.get("/all", getAllEmployeesDetails);

//@route POST api/employee/all
//@desc Save Employee
router.post("/", saveEmployee);

//@route PUT api/employee/all
//@desc Update Employee
router.put("/:id", updateEmployeeDetails);

//@route Delete api/employee/all
//@desc Update Employee
router.delete("/:id", deleteEmployee);

module.exports = router;
