const MongoClient = require('mongodb').MongoClient;
const DBName = 'demo';
const uri =`mongodb+srv://qaswads-dev:verYeasYpassworD@cluster0.q82vv.mongodb.net/${DBName}?retryWrites=true&w=majority`;
let connectionPromise = null;

exports.connectDB = connectDB;

async function connectDB() {
  if (connectionPromise) return connectionPromise;

  connectionPromise = new Promise((resolve, reject) => {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (client.isConnected()) {
      return resolve(client);
    } else {
      client
        .connect()
        .then(() => {
          return resolve(client.db(DBName));
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    }
  });

  return connectionPromise;
};
