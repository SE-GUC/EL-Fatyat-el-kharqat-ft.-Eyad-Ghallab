const express = require('express');
const router = express.Router();
const validator = require('../../validations/Commentvalid')
//  Comment
const Comment = require('../../models/Comment');

// @route   GET api/Comment
// @desc    Get All Comment
// @access  Public

router.get('/', async (req,res) => {
  const Comment = await Comment.find()
  res.json({data : Comment})
})
router.get('/:id', async (req,res) => {
  const Comment = await Comment.findById(req.params.id)
 res.json({data : Comment})
})
// @route   POST api/Comment
// @desc    Create An Comment
// @access  Public
router.post('/', (req, res) => {
  const newComment = new Comment({
    id:req.body.id,
    name: req.body.name,
    comment: req.body.comment
  });

  newComment.save().then(Comment => res.json(Comment));
});

// @route   DELETE api/Comment/:id
// @desc    Delete A Comment
// @access  Public
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
    .then(Comment => Comment.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// Update a comment
router.put('/:id',async (req,res) => {
    try {
     const id = req.params.id
     const forma = await Comment.findOne({id})
     if(!Comment) return res.status(404).send({error: 'comment does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedBook = await Comment.updateOne(req.body)
     res.json({msg: 'comment updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 router.get('/', (req, res) => res.json({ data: Comment }));

module.exports = router;