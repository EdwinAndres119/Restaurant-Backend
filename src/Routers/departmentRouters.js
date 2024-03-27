const express = require('express');
const departmentController = require('../Controllers/departmentController');
const router = express.Router();

router.get('/listDepartment',departmentController.listDepartments);

module.exports = router;