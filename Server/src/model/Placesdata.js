const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Akhil:12345@cluster0.otblo.azure.mongodb.net/Hotspot-zonesDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema

var NewPlacesSchema = new Schema({
    
    place : String,
    taluk : String,
    duration : String,
    note : String
});

module.exports= mongoose.model('Placesdata',NewPlacesSchema,'places')