const express = require('express');
const router = express.Router();
const validator = require('../../validations/Commentvalid')
//  Comment
const Comment1 = require('../../models/Comment');

// @route   GET api/Comment
// @desc    Get All Comment
// @access  Public

router.get('/', async (req,res) => {
  const Comment = await Comment1.find()
  res.json({data : Comment})
})
router.get('/:id', async (req,res) => {
  const Comment = await Comment1.findById(req.params.id)
 res.json({data : Comment})
})
// @route   POST api/Comment
// @desc    Create An Comment
// @access  Public
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const Comment = await Comment1.create(req.body)
     res.json({msg:'Comment was created successfully', data: Comment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

// @route   DELETE api/Comment/:id
// @desc    Delete A Comment
// @access  Public
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedComment = await Comment1.findByIdAndRemove(id)
     res.json({msg:'Comment was deleted successfully', data: deletedComment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

// Update a comment

router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
    //  const investor = await inv.findOne({id})
    //  if(!investor) return res.status(404).send({error: 'investor does not exist'})
    //  const isValidated = validator.updateValidation(req.body)
    //  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedcom = await Comment1.updateOne(req.body)
     res.json({msg: 'Comment updated successfully', data: updatedcom})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 router.get('/', (req, res) => res.json({ data: Comment }));

module.exports = router;