import { Router } from 'express'
import { Employee } from './model.js';

export const router = Router();

router.get("/", async (req, res) => {
    try {
        const fetchEmployees = await Employee.find({})
        res.status(200).json(fetchEmployees);
    }catch(err){
        console.log(err); 
        res.status(401).json({ message : "An error occurred while"})
    }
})
router.post("/", async (req, res) => {
    try { 
        const { firstName, lastName, email } = req.body;
        if(!firstName || !lastName || !email){
            return res.status(400).json({ message : "Please fill all fields"});
        }
        // Save to the database 
        const newEmployee = new Employee({
            firstName, 
            lastName, 
            email
        })
        await newEmployee.save();
        res.status(201).json({message : "Employee added successfully"});
    }catch(err){
        console.log(err); 
        res.status(401).json({ message : "An error occurred while"})

    }
})
router.get("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ message : "Please provide an id"});
        }
        const fetchEmployee = await Employee.findById(id);
        res.status(200).json(fetchEmployee);
    }catch(err){
        console.log(err); 
        res.status(401).json({ message : "An error occurred while"})
    }

})
router.delete("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ message : "Please provide an id"});
        }
        const fetchEmployee = await Employee.findByIdAndDelete(id);
        res.status(200).json({message :"Employee deleted successfully"});

    }catch(err){
        console.log(err); 
        res.status(401).json({ message : "An error occurred while"})

    }
})

router.put("/:id", async (req, res) => {
    try { 
        const { id } = req.params;
        const { firstName, lastName } = req.body;
        if(!firstName || !lastName){
            return res.status(400).json({ message : "Please fill all fields"});
        }
        // Save to the database 
        await Employee.findByIdAndUpdate(id, {
            firstName, 
            lastName,
        })
        res.status(201).json({message : "Employee updated successfully"});
    }catch(err){
        console.log(err); 
        res.status(401).json({ message : "An error occurred while"})

    }
})