const mongoose=require("mongoose")
var userSchema = mongoose.Schema({ 
        ExpenseName: String,    
        Description: String,    
        ExpenseAmount: Number,
        PurchaseDate:{ type: Date, default: Date.now }  
         }); 
 module.exports = mongoose.model('Consumer', userSchema); 
