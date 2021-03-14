const Comment = require('../models/comment');

exports.postComments = (req, res) => {
    const commentId = 1;
    const userName = req.body.userName;
    const description = req.body.description;

    const comments = new Comment(commentId, userName, description);
    comments.save();
    res.redirect('/');

};

exports.getComments = (req, res) => {
    Comment.fetchAll(comments => {
        res.render('admin/add-comment.ejs',
        {
            comments: comments, 
            pageTitle: 'Comment',
            path: '/admin/add-comment'
        }
        );
    });
};