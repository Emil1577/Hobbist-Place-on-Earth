const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://emilronquillo:Emil#1577@cluster0.inf0h9w.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hobbies',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

const adminPassword = encodeURIComponent( process.env.ADMIN_PASSWORD )


// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hobbies',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

module.exports = mongoose.connection;