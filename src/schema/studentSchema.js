const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = {
    name: {
        type: String,
        required: true,
        minlength: [4, "Name should contain atleast 3 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: function(value){
            if(!validator.isEmail(value)){
                throw new Error ("Inavlid Email Address!")
            }
        }
    },
    number: {
        type: Number,
        required: true,
        min: [10, "Number should be of minimum 10 digits"]
    },
    address: {
        type: String,
        required: true
    }
};

const StudentCollection = new mongoose.model("StudentCollection", studentSchema);

module.exports = StudentCollection;