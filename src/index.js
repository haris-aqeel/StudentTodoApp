// Built In Methods
const express = require('express');
const app = express();
require('./database/connection')
app.use(express.json());
const port = process.env.PORT || 3000;
const StudentCollection = require('./schema/studentSchema');


app.post("/students", async(req, res)=> {

    try{
        
        const insertData = new StudentCollection(req.body)
        insertData.save();
        res.status(200).send(req.body)
    }catch(err){
        console.log(err)
        res.status(404).send("Failed to Create Student")
    }
})

app.get("/students", async(req, res)=> {

    try{
        
       const allStudents = await StudentCollection.find();
        res.status(200).send(allStudents)
    }catch(err){
        console.log(err)
        res.status(404).send("Failed to fetch Students")
    }
})

app.delete("/students", async(req, res)=> {

    try{
       const {id} = req.body; 
       const deleteStudent = await StudentCollection.deleteOne({_id: id});
       res.status(200).send(`Student with id ${id} successfully deleted`)
    }catch(err){
        console.log(err)
        res.status(404).send("Failed to delete Student of id "+ id)
    }
})

app.patch("/students", async(req, res)=> {

    try{
        
        const {id, data} = req.body;
        const updateStudent = await StudentCollection.updateOne({_id: id}, data);
       
        res.status(200).send(`Student with id ${id} successfully updated`)
    }catch(err){
        console.log(err)
        res.status(404).send("Failed to Update Student with id "+ id)
    }
})



app.listen(port, ()=> {
    console.log(`listening to the port ${port}`)
})

