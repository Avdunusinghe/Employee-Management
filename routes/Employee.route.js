const express = require("express");
const router = express.Router();

const {
  getAllEmployeesDetails,
  saveEmployee,
} = require("../controllers/Employee.controller");

//@route GET api/employee/all
//@desc Get All Employees
router.get("/all", getAllEmployeesDetails);

//@route POST api/employee/all
//@desc Save Employee
router.post("/", saveEmployee);

module.exports = router;
