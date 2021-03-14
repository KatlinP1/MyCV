const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const commentController = require('../controllers/comment');

router.get('/', homeController.getInfos);
router.get('/admin/add-comment', commentController.getComments);
router.post('/admin/add-comment', commentController.postComments); 

module.exports = router;