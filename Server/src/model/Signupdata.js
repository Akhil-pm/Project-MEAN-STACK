const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Akhil:12345@cluster0.otblo.azure.mongodb.net/Hotspot-zonesDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema

const signupSchema = new Schema({
    name:String,
    username:String,
    phoneNo: Number,
    email:String,
    password: String,
    role:{
        type: String,
        default: 'user'
    }

    
});

module.exports= mongoose.model('Signupdata',signupSchema,'signupdata')