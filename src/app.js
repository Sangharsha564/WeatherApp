const dotenv = require("dotenv")
dotenv.config({path:"../.env"});
const cookiesParser=require("cookie-parser");
const express= require('express');
const app=express();
const path= require('path');
const hbs= require('hbs');
const port=3000;
const { error } = require('console');
const staticPath=path.join(__dirname,'../public');
app.use(express.static(staticPath));
app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
const partialsPath=path.join(__dirname,'components');
hbs.registerPartials(partialsPath);
app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/about',(req,res)=>{
    res.render("about");
});
app.get('/weather',(req,res)=>{
    res.render("weather");
});
app.get('*',(req,res)=>{
    res.render("404error");
});
app.listen(port,()=>{
    console.log(`listining to port no ${port}`);
})