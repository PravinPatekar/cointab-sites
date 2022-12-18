const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
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


module.exports = mongoose.model("Users", userSchema)



