const express = require('express');
const app = express();
const portNumber = 3005;
const Sequelize = require('sequelize');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const { MenuItem } = require('./models')
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)
app.listen(portNumber, function(req, res){
    console.log(`listening on port ${portNumber}`);
})

app.get('/api/menu', async function(req, res){
    let results = await MenuItem.findAll();
    res.json({results});
})
app.get('/api/menu/:id', async function(req, res){
    let { id } = req.params;
    let results = await MenuItem.findByPk(id);
    res.json({results});
})
app.post('/api/create', async function(req, res){
    const {dishname, price, description, allergyinfo, menusection} = req.body;
    let results = await MenuItem.create({
        dishname: dishname,
        price: parseFloat(price),
        description: description,
        allergyinfo: allergyinfo,
        menusection: menusection,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.json({results});
    // res.redirect('/api/menu');
})

app.get('/api/delete/:id', async function(req, res){
    const { id } = req.params;
    let results = await MenuItem.destroy({
        where:{
            id
        }
    })
    res.json({results});
})

app.post('/api/edit/:id', async function(req, res){
    const { id } = req.params;
    const {dishname, price, description, allergyinfo, menusection} = req.body;
    let results = await MenuItem.update({
        dishname: dishname,
        price: parseFloat(price),
        description: description,
        allergyinfo: allergyinfo,
        menusection: menusection,
        updatedAt: new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})
