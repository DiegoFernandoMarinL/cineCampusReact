const { MongoClient } = require('mongodb');

exports.connectMongo = async()=> {
    //const url = `${process.env.MONGO_PROTOCOLO}${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
    const url = 'mongodb://root:campus2023@10.0.0.145:27017/'
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db("cineCampus");
    // const collection = db.collection('client')
    return db;
}