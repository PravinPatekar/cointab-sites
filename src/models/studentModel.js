const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    subjects: {
        type: String,
        required: true,
        enum : ['Mathematics','English','Communication','Philosophy','Natural','Social'],
    },
    number: {
        type: Number,
        required: true,
    },
    userId:{
        type     : ObjectId,
        required : [true, "userId must be provided"],
        ref      : "Admin",
        trim     : true 
    },
    deletedAt: {
        type: Date, 
        default: null
    }, 
    isDeleted: {
        type: Boolean, 
        default: false
    },
}, { timestamps: true })


module.exports = mongoose.model("Students", studentSchema)



