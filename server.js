const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const api = require('./routes/api');
const html = require('./routes/htmlRoutes')


//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//routes 
app.use('/api', api);
app.use('/', html);



app.listen(PORT, ()=>{
    console.log(`app listening to port ${PORT}`);
});