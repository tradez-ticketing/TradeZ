var db = require("../models");

module.exports = function(app) {
  // Get all experiences the account holder has to offer
  app.get("/api/transaction/:id", function(req, res) {
    db.Transaction.findAll({
      where: {
        AccountId: req.param.id
      }
    }).then(function(db) {
      res.json(db);
    });
  });

  //Get all existing experiences to list in what i want drop down
app.get("/api/experiences"), function(req,res){
  db.Transactions.findAll({}).then(function(db){
    res.json(db)
  });
}

  // Search
  // app.get("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an experience by id
  app.delete("/api/deletetransaction/:id", function(req, res) {
    db.Transaction.destroy({ where: { id: req.params.id } }).then(function(
      db
    ) {
      res.json(db);
    });
  });
};


//Create Entry into Database from Account page
