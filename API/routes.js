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

module.exports = router;