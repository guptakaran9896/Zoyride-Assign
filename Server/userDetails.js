const mongoose= require('mongoose');

const userdetails = new mongoose.Schema({
    // ident: Number,
    type: String,
    name:String,
    email:String,
    password:String,
},
{
    collection: 'usersinfo',
}
)

const studentdetails = new mongoose.Schema({
    // ident: String,
    type: String,
    name:String,
    Email:String,
    address:String,
    city: String,
    classs: String,
    section: String,
},
{
    collection: 'studentinfo',
}
)
mongoose.model('usersinfo', userdetails);
mongoose.model('studentinfo', studentdetails);