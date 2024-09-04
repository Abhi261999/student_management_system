const express = require('express');
const router = express.Router();
const Student = require('../models/Student');



router.post('/student', async (req, res) => {
    try {
    const newPersonData = req.body;
    const newPerson = new Person(newPersonData);
    // Save the new person to the database using await
    const savedPerson = await newPerson.save();
    console.log('Saved person to database');
    res.status(201).json(savedPerson);
    } catch (error) {
    console.error('Error saving person:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
    });
    


//GET method to get the person
router.get('/student', async (req, res) =>{
    try {
      const data = await Person.find();
      console.log('get all person data');
      res.status(200).json(data);
    } catch (error) {
      console.log(error, 'Error saving new person');
      res.status(500).json({error: 'Internal server error'});
    }
  })


module.exports = router;