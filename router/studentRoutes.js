const express = require('express');
const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controller/studentControllers');

const router = express.Router();

// Match the routes to the controller
router.get('/', getAllStudents);
router.get('/:student_id', getStudentById);
router.post('/', createStudent);
router.put('/:student_id', updateStudent);
router.delete('/:student_id', deleteStudent);

module.exports = router;
