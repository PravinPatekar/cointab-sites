const mongoose = require("mongoose")


const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
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


module.exports = mongoose.model("Admin", adminSchema)