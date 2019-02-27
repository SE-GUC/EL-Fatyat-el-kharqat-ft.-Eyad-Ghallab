// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const reviewer = require('../../models/reviewer');

// temporary data created as if it was pulled out of the database ...
const reviewers = [
	new reviewer('eyad', 30,'male',2,'eyafds0'),
	new reviewer('rawan', 20,'female',2,'eyafds0'),
];
// Get all users
router.get('/', (req, res) => res.json({ data: reviewers }));

module.exports = router;

