const express =require('express');
const app =express();
const connectDB =require('./db')
const cors = require('cors')
app.use(express.json());
app.use(cors())


app.use('/',require("./routes/mock"))
app.use('/api/',require("./routes/user"))

connectDB()


const PORT =process.env.PORT ||5000
app.listen(PORT,()=>console.log(`Server started at  ${PORT}`));

module.exports=app