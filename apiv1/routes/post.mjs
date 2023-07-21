
import express from 'express';
let router = express.Router()




// GET     /api/v1/post/:userId/:postId
router.get('/post/:userId/:postId', (req, res, next) => {
    console.log('this is posts v1', new Date());
    res.send('this is posts v1');
})
// GET     /api/v1/posts/:userId
router.get('/posts/:userId', (req, res, next) => {
    console.log('this is posts v1', new Date());
    res.send('this is posts v1');
})
// POST    /api/v1/post
router.post('/post', (req, res, next) => {
    console.log('this is created post v1', new Date());
    res.send('this is created post v1');
})
// PUT     /api/v1/post/:userId/:postId
router.put('/post/:userId/:postId', (req, res, next) => {
    console.log('this is post v1', new Date());
    res.send('this is post v1');
})
// DELETE  /api/v1/post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('this is delete post v1', new Date());
    res.send('this is delete post v1');
})

export default router