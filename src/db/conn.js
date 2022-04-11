const mongoose = require('mongoose');

const DB = 'mongodb+srv://ashutoshmishra23:ashutoshmishra@cluster0.usg8w.mongodb.net/contactme?retryWrites=true&w=majority';


mongoose.connect(DB).then(() => {
    console.log("connection is succesfull");
}).catch((e) => {
    console.log(e);
})