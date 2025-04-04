import { model, Schema } from 'mongoose'; 

const employeeSchema = new Schema({
    firstName : {
        type : String,
        required : true
    }, 
    lastName : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true, 
        unique : true,
    },
})

export const Employee = model("Employee", employeeSchema);
