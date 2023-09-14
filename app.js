const express = require('express');
const app = express()
const port = 3000;


//static files

app.use(express.static('src'))
//app.use('/html',express.static(__dirname+'src/index'))


//listening on porn 3000
app.listen(port,()=>{

    console.info("server started at port " +port);

})