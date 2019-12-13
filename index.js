let express = require('express');

let app = express();

app.get('/', (req,res)=> {

    res.send("HELLO FROM APP");
})

app.listen(3000, ()=> {

    console.log("Working")
})