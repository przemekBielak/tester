const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/embedded-tester-db';

mongo = MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log("Database created");

    var dbo = db.db("mydb");
    var myobj = [
        {name: "Przemek", address: "Polska"},
        {name: "John", address: "USA"}
    ];


    dbo.collection("customers").find({}).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});

module.exports = mongo;
