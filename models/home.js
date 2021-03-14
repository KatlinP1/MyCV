const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'human.json');

const getInfosfromfile = (cb) => {
    fs.readFile(filePath, (error, fileContent) => {
        if(error){
            console.log(error);
            return cb ([]);

        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Info {
    constructor(id, name, url, job, birth, address, email, phone, languaege, about, workExperience, education,
        workSkills, hobby, add ) {
        this.id = id;
        this.name = name;
        this.imageUrl = url;
        this.job = job;
        this.birth = birth;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.about = about;
        this.language = languaege;
        this.workExperience = workExperience;
        this.education = education;
        this.workSkills = workSkills;
        this.hobby = hobby;
        this.add = add;
    }

        //cb- objekt mis salvest andmed mis toimub funktsiooni sees
        static fetchAll(cb){
            getInfosfromfile(cb);
         }
     
         static findById(id, cb){
             getInfosfromfile(infos => {
                 //filter a product by its id
                 const info = infos.find(p => p.id === id);
                 cb(info);
             });
     
         }
     
}