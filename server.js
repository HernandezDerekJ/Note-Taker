//Setup middleware: Get data (json/url) parse them and set routes
const express = require('express');
const api= require('./Route/api');
const html= require('./Route/html');
const app = express();
const PORT = process.env.port || 3001;
const cyan = '\x1b[36m';


//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));
//Returns middleware that only parses json
app.use(express.json());
//Returns middleware that only parses urlencoded
app.use(express.urlencoded({extended: true}));
app.use("/api",api);
app.use("/",html);


app.listen(PORT, () =>
  console.log(
    cyan, `Serving static asset routes on port at http://localhost:${PORT}!`
  )
);
