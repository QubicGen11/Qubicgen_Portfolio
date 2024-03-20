const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const { Query } = require('./models/queryModel');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();
mongoose.connect(
	`mongodb+srv://qubicgen:9y0VnyFK8W2weXzQ@cluster0.0glybyn.mongodb.net/`
);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Create a user schema
const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Create a route for signing up
app.post('/api/signup', async (req, res) => {
	const { userName, password } = req.body;

	// Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create a new user
	const user = new User({
		userName,
		password: hashedPassword,
	});

	// Save the user to the database
	await user.save();

	// Send a success response
	res.status(200).json({ message: 'User created successfully' });
});

app.post('/api/login', (request, response) => {
	console.log(request.body);
	// check if userName exists
	User.findOne({ userName: request.body.userName })

		// if userName exists
		.then((user) => {
			// compare the password entered and the hashed password found
			bcrypt
				.compare(request.body.password, user.password)

				// if the passwords match
				.then((passwordCheck) => {
					// check if password matches
					if (!passwordCheck) {
						return response.status(400).send({
							message: 'Passwords does not match',
						});
					}

					//   create JWT token
					const token = jwt.sign(
						{
							userId: user._id,
							userName: user.userName,
						},
						'RANDOM-TOKEN',
						{ expiresIn: '24h' }
					);

					//   return success response
					response.status(200).send({
						message: 'Login Successful',
						userName: user.userName,
						token,
					});
				})
				// catch error if password does not match
				.catch((error) => {
					response.status(400).send({
						message: 'Passwords does not match',
						error,
					});
				});
		})
		// catch error if userName does not exist
		.catch((e) => {
			response.status(400).send({
				message: 'userName not found',
				e,
			});
		});
});

// Create a route for verifying the token and sending a boolean value

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
		const token = req.headers.authorization?.split('Bearer ')[1]; // Fix token extraction

		if (!token) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		jwt.verify(token, 'RANDOM-TOKEN', async (err, decoded) => {
			if (err) {
				return res.status(401).json({ message: 'Unauthorized' });
			}

			// Token verified, proceed to fetch data
			const data = await Query.find({});
			res.status(200).json(data);
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
