const fs = require('fs');
const util = require('util');
const uuid = require('../db/uuid');
const route = require('express').Router();

function readDB(){
    var temp = JSON.parse(fs.readFileSync('./db/db.json'));
    return temp;
}
function updateData(x){
  fs.writeFile("db/db.json",JSON.stringify(x), (err) => {
    console.log('Sucess');
    return true;
});

}
  // The following API routes should be created:
  // GET /api/notes should read the db.json file and return all saved notes as JSON.
  // POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

  //API
route.get(['/api/notes','/notes'], (req, res) => {
    let val = readDB()
    res.json(val);
});
    
route.post(['/api/notes','/notes'], (req, res) => {
    let val = [].concat(readDB());
    let temp = { title: req.body.title, text: req.body.text, id: uuid() };
    val.push(temp);
    console.log('Added');
    updateData(val);
    res.json(val);
});
route.delete(['/api/notes/:id','/notes/:id'], (req, res) => {
    let val = [].concat(readDB());
    for(let x = 0; x < val.length;x++){
        if(val[x].id == req.params.id){
            val.splice(x, 1);
        }
    }
    updateData(val);
    res.json(val);
});

module.exports = route;