
var path = require("path");
var mongoose = require("mongoose");
var Wager = require("../models/Wager.js");
var Answer = require("../models/Answer.js");

// var upload = multer({dest: "./uploads"});
// var fs = require("fs");



module.exports=function(app){
  

app.post("/bet",function(req,res){
  console.log(req.body)
  var NewWager = new Wager ({     
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      score: 0
  });
      NewWager.save(function(err,doc){
          if (err){
          console.log('err: ' + error);
          res.json('error: there was an error');
          }
          else{  
          console.log(doc) 
          res.redirect("/table")
          }   
    })
});



app.post("/answer",function(req,res){
  console.log(req.body)
  var NewAnswer = new Answer ({     
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      q1: req.body.q1,
      q2: req.body.q2,
      q3: req.body.q3,
      q4: req.body.q4,
      q5: req.body.q5,
      q6: req.body.q6,
      score: 6
  });
      NewAnswer.save(function(err,doc){
          if (err){
          console.log('err: ' + error);
          res.json('error: there was an error');
          }
          else{  
          console.log(doc) 
          res.redirect("/table")
          }   
    })
});




app.get("/show-all-in-table", function(req, res) {
   Wager.find({}).exec(function(error,doc){
      if (error) {
       console.log(error)
      }
      else {
        res.send(doc);
        console.log(doc)
      }
    })
})



app.get("/show-answer",function(req,res){
  Answer.find({}).exec(function(error,doc){
    if (error) {
     console.log(error)
    }
    else {
      res.send(doc);
      console.log(doc)
    }
  })
})







app.get("/delete", function(req, res) {
  Wager.remove({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})


app.get("/del", function(req, res) {
  Answer.remove({}).exec(function(error,data){
     if(error){
        res.send(error)
      }
      else{
        console.log(data)
        res.send(data)
      }
   });
})



/////////////////// PAGES
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/answer", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/answer.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/table.html"));
});

}////MODULE END///////



  
