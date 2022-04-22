const express =require('express');
const app =express();

app.get('/test',(req,res) => {
    return res.status(200).json({msg: 'test message successfully'})
})



const PORT =process.env.PORT ||5000

app.listen(PORT,()=>console.log(`Server started at  ${PORT}`));

