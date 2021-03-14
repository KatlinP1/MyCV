const Info = require('../models/home');
const Comment = require('../models/comment');

exports.getInfos = (req, res) => {
    Info.fetchAll(infos => {
        Comment.fetchAll(comments => {
            res.render('admin/home.ejs',
            {
                infos: infos, 
                comments: comments,
                pageTitle: 'Admin Info',
                path: '/admin/home'
            }
            );
        })
    
    });
};