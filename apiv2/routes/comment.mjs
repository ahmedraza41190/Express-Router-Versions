import express from 'express';
let router = express.Router()

// GET     /api/v1/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is comments v2', new Date());
    res.send('this is comments v2');
})
// GET     /api/v1/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    console.log('this is comments v2', new Date());
    res.send('this is comments v2');
})
// PUT     /api/v1/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is update comment v2', new Date());
    res.send('this is update comment v2');
})
// DELETE  /api/v1/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is delete comment v2', new Date());
    res.send('this is delete comment v2');
})

export default router