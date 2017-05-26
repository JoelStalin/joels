var mongodb = require('mongodb');
function dbfind(tabla,callback) {
    var uri = 'mongodb://Admin:Admin1234@ds161400.mlab.com:61400/heroku_20t778v4';
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(uri, function (err, db) {
        if (err) {
            console.log(err);
            process.exit(1);
        };
        var collection = db.collection(tabla);
        collection.find().toArray(function (err, docs) {
            if (err) {
                console.log(err);
                process.exit(1);
            } else if (docs.length) {
                console.log('found:', docs);
                callback(docs);
            } else {
                console.log('no encontrado');
            }
        });
    });
} exports.dbfind = dbfind;
