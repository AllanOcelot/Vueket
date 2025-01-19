const express = require('express');
const PocketBase = require('pocketbase/cjs');
const cors = require('cors');



// Local config
const dotenv = require('dotenv');
const axios  = require('axios')

// Pocketbase instance
const pocketbasePort = process.env.PORT || 8090;
const pb = new PocketBase('http://127.0.0.1:' + pocketbasePort );

// Our server is an express server
const app = express();

dotenv.config();
app.use(express.json()); 
app.use(cors());



// Example route: Fetch all records from a collection
app.get('/api/:collection', async (req, res) => {
  console.log('Attempting to get collection ')
    try {
        const { collection } = req.params;
        const records = await pb.collection(collection).getFullList();
        res.status(200).json(records);
    } catch (err) {
        console.log('---------')
        console.error(err)
        console.log('---------')
        res.status(500).json({ error: 'Failed to fetch records' });
    }
});


// Example route: Add a new record to a collection
app.post('/api/:collection', async (req, res) => {
    try {
        const { collection } = req.params;
        const data = req.body;
        const record = await pb.collection(collection).create(data);
        res.status(201).json(record);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create record' });
    }
});


// Example route: Update a record in a collection
app.put('/api/:collection/:id', async (req, res) => {
    try {
        const { collection, id } = req.params;
        const data = req.body;
        const record = await pb.collection(collection).update(id, data);
        res.status(200).json(record);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update record' });
    }
});


// Example route: Delete a record from a collection
app.delete('/api/:collection/:id', async (req, res) => {
    try {
        const { collection, id } = req.params;
        await pb.collection(collection).delete(id);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete record' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});