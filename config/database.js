var mongoose = require('mongoose'); 
module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-6p5dw.mongodb.net/workshop?retryWrites=true') 
.then(() => { 
console.log("DB connected") 
}, err => { 
console.log("DB error") 
} 
); 
