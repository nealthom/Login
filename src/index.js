const express = require("express");
const dotenv = require("dotenv");
const path = require('path')
dotenv.config();

require('./db/mongoose')

const userRouter = require('./routes/user')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname,'client/build')))
app.use(userRouter)

// sendback React's index.html file
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
