const express = require('express');
const AnyDay = require('./src/routes/AnyDay');
const app = express();
const path = require('path'); 
const PORT = process.env.PORT || 8000;

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'..','app','views'))
// app.use(express.json());
app.use(express.static(path.join(__dirname,'..','app','public')));
app.use('/history',AnyDay);

app.get('/',(req,res)=>{
        res.redirect(`/history`);
})

app.listen(PORT, ()=>{
        console.log(`API is Running ON PORT: http://localhost:${PORT}`);
});