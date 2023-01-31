const express = require('express');
const router = express.Router();
const Model = require('./model');


//Get all Method
router.get('/employees', async (req, res) => {
    try{
        const data = await Employees.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/employees/:id', async (req, res) => {
    try{
        const data = await Employees.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Post Method
router.post('/employees/add', async (req, res) => {
    const data = new Employees({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
        });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Employees.findByIdAndUpdate(
        id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;