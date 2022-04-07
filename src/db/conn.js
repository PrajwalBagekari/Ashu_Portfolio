const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/contact-api").then(() => {
    console.log("connection is succesfull");
}).catch((e) => {
    console.log(e);
})