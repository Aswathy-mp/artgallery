const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoArt');
// mongoose.connect('mongodb+srv://ArtGallery:ArtGallery@fsd-training.ou3ia.mongodb.net/ArtGallery-Data?retryWrites=true&w=majority');
const Schema=mongoose.Schema;

var PaintingSchema=new Schema({
    name : String,
    artist : String,
    category : String,
    diamension : String,
    price : String,
    image : String
});

var PaintingData=mongoose.model('paintings',PaintingSchema);
module.exports=PaintingData;