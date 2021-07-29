const path = require('path');
const route = require('express').Router();


// The following HTML routes should be created:
// GET /notes should return the notes.html file.
// GET * should return the index.html file.

  //HTML
route.get('/notes', (req, res) => {
  console.log('Should be here');
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});
route.get('*', (req, res) => {
  console.log('Should not be here');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = route;