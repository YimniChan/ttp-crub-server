const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

router.get('/', async(req, res, next) => {

    try {
        // campuses will be the result of the Campus.findAll promise
        const students = await Student.findAll({ include: Campus });
        // if campuses is valid, it will be sent as a json response
        console.log(students);
        res.status(200).json(students);
      } catch (err) {
        // if there is an error, it'll passed via the next parameter to the error handler middleware
        next(err);
      }

});

router.get('/:id',async (req, res, next)=>{
    const { id } = req.params;
    // query the database for a campus with matching id
    try {
      // if successful:
      const student = await Student.findByPk(id);
      // send back the campus as a response
      res.status(200).json(student);
    } catch (err) {
      // if error:
      // handle error
      next(err);
    }
});

router.post('/', async (req, res, next)=>{
    const { firstName, lastName, email, gpa, imageUrl } = req.body;
    // Create a campus object
    const studentObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gpa: gpa,
        imageUrl: imageUrl,
    };
  try{
    // console.log(req.query)
    const newStudent = await Student.create(studentObj);
    res.status(201).json (newStudent);
  }
  catch (err){
    next(err);
  }
});

router.put('/:id', async (req, res, next) =>{
    const { id } = req.params;
    const { firstName, lastName, email, gpa, imageUrl } = req.body;
    // Create a campus object
    const updatedObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gpa: gpa,
        imageUrl: imageUrl,
    };
  try{
    const student = await Student.findByPk(id);
    console.log(updatedObj);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    console.log(updatedStudent)
    res.status(201).send(updatedStudent);
  }
  catch (err){
    next(err);
  }
});

router.delete('/:id', async (req, res, next) =>{
    const { id } = req.params;
  try{
    const student = await Student.findByPk(id);
    await student.destroy();
    res.sendStatus(204);
  }
  catch(err){
    next(err);
  }
});

module.exports = router;