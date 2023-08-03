const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017'; // Assuming MongoDB is running on the default port

// const db = mongoose.connection;
async function connectToDB() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('AMAZON_TASK_db'); // Replace 'amazon_navigation_test' with your desired database name
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
}

module.exports = connectToDB;