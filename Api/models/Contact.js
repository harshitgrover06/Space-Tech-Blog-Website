const mongoose = require ("mongoose");
// Contact Schema
const ContactSchema = new mongoose.Schema(
    {
        firstname:{type:String},
        lastname: {type:String},
        phone:{type:String},
        msg:{type:String}
    }
)


module.exports = mongoose.model("Contact",ContactSchema);;

