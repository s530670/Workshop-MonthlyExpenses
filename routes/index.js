var express = require('express');
var router = express.Router();
var Expense = require("../model/expense")
 
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
 
// save Expense
router.post('/saveExpense', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide expense details" })
  }
  var expenseObj = new Expense(req.body);
  expenseObj.save(function(err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err : err })
    }
    else {
      res.status(200).json({ msg: "Expense saved successfully", data : data})
    }
  });
})
// get Expense List
router.get('/getMonthlyExpenseList', function (req, res, next) {
Expense.find({},function(err,results){
  if (err) {
    res.status(403).json({ msg: "something bad", err })
  }
  else {
    res.status(200).json({ msg: "Expense fetched successfully",data:results })
  }
})
});

// get last Expense entered
router.get('/getExpenseLast', function (req, res, next) {
  Expense.find({},function(err,results){
var lastRecord
      // console.log(results.length);
          if(results.length>0)
            {
              lastRecord=results[results.length-1]
            }
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "Expense record fetched successfully",data:lastRecord })
    }
  })
  });
  

 
module.exports = router;

