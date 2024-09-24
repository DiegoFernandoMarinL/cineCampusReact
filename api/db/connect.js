const { MongoClient } = require('mongodb');

exports.connectMongo = async()=> {
    //const url = `${process.env.MONGO_PROTOCOLO}${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
    const url = 'mongodb://localhost:27017/'
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db("cineCampus");
    // const collection = db.collection('client')
    return db;
}