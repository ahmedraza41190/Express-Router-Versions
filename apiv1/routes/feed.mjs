
import express from 'express';
let router = express.Router()



// GET     /api/feed/:userId
router.get('/feed/:userId', (req, res, next) => {
    console.log('this is feed v1', new Date());
    res.send('this is feed v1');
})


export default router