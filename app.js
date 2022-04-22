const express =require('express');
const app =express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use('/',require("./routes/mock"))

const PORT =process.env.PORT ||5000

app.listen(PORT,()=>console.log(`Server started at  ${PORT}`));

module.exports=app