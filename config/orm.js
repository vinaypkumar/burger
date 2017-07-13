var connection = require("../config/connection.js");

//Helper functions
function printQuestionMarks(number) {	
  var arr = [];

  for (var i = 0; i < number; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

//Orm
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (";    
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";    

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    var queryString = "UPDATE burgers SET ";
  
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
   
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
  
};

module.exports = orm;