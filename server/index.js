const express = require('express');

const app = express();

// app.get('/', (req, res)=>{
//   res.sendFile('../client/index.html');
// });
app.use(express.static('../client'));

// app.get('/', (req, res)=>{
//});

app.listen(8080);
