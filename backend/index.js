// /* eslint-disable no-undef */
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const { Query } = require('./models/queryModel');

dotenv.config();
mongoose.connect(
	`mongodb+srv://qubicgen:9y0VnyFK8W2weXzQ@cluster0.0glybyn.mongodb.net/`
);

const express = require('express');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/queries', async (req, res) => {
	try {
		console.log('heree', req.body);
		const newQuery = new Query(req.body);
		const savedQuery = await newQuery.save();
		res.status(201).json(savedQuery);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
app.get('/api/fetchData', async (req, res) => {
	try {
		// console.log('here data', req.body);
		const data = await Query.find({});
		console.log(data, 'data');
		res.status(200).json(data);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
