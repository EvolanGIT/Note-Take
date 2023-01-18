// exports
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uniqueID = require('uniqid');

// get
router.get('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(data)
}); 

// post
router.post('/notes', (req, res) => {
    let IDnum = uniqueID();
    const data = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(data)
    console.log(IDnum);

    const newInput = {
        title: req.body.title, 
        text: req.body.text, 
        id: IDnum
    };
    data.push(newInput);
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
});

module.exports = router;

