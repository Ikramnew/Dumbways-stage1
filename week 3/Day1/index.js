const express = require('express')
const app = express()
const port = 3000

//routing
app.get('/',(req, res)=>{
    res.send('hello world!, kumaha damang sia')

})

app.listen(port, ()=>{
    console.log(`server jalan di port ${port}`);
})