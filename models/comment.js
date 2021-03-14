const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'comment.json');

const getCommentsfromfile = (cb) => {
    fs.readFile(filePath, (error, fileContent) => {
        if(error){
            console.log(error);
            return cb ([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Comment {
    constructor(commentId, userName, description) {
        this.commentId = commentId;
        this.userName = userName;
        this.description = description;
    }

    save(){ //uue commenti salvestamine 
        getCommentsfromfile(comments => {
            this.commentId = Math.random().toString();
            comments.push(this);
            fs.writeFile(filePath, JSON.stringify(comments), (error) =>{
            console.log(error);
            }); 
        }); 
    }

        //cb- objekt mis salvest andmed mis toimub funktsiooni sees
        static fetchAll(cb){
            getCommentsfromfile(cb);
         }
     
         static findById(commentId, cb){
             getCommentsfromfile(comments => {
                 //filter a product by its id
                 const comment = comments.find(p => p.commentId === commentId);
                 cb(comment);
             });
     
         }
     
}