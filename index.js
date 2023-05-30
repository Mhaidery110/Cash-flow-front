const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "mhaidery@110",
    database: "cashflowdb"
}) 


app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))


// API for Customer Details

// Get API from database

// app.get("/read",(req, res)=>{
    
//     const q = "SELECT * FROM customer;"
//     db.query(q, (err, result)=>{
//         res.send(result)
//     })
    
// });

// Total in sales

app.get("/total", (req, res)=>{
    const q =  "SELECT * , subtotal - ((subtotal*discount)/100) AS Total FROM customer"
      db.query(q, (err, result)=>{
        res.send(result)
      })
})

// app.get("/totalsales", (req, res)=>{
//     const q = "SELECT SUM(Total) AS Total FROM customer"
//     db.query(q, (err, result)=>{
//         res.send(result)
//     })
// })
 

// Post API from front end


app.post("/insert", (req,res)=>{

    const date = req.body.date
    const bill = req.body.bill
    const type = req.body.type
    const customer = req.body.customer
    const table = req.body.table
    const subtotal = req.body.subtotal
    const sstatus = req.body.sstatus
    const discount = req.body.discount

    const sqlInsert = "INSERT INTO customer (`date`, `bill`, `type`, `customer`, `table`, `subtotal`, `sstatus`, `discount`) VALUES (?)";
    const VALUES = [date, bill, type, customer, table, subtotal, sstatus, discount]
    db.query(sqlInsert, [VALUES] , (err,result)=>{
        if(!err){
            console.log(result)
        } else {
            console.log(err);
        }
    })
})




app.delete("/deleterec/:id", (req, res) => {

    const q = "DELETE FROM customer WHERE id = ?";
    const id = req.params.id;
    db.query(q, [id], (err, result)=>{
        if(err){
            console.log(err);
        } else {
            console.log(result);
        }
    })
    res.send("DELETE Request Called")
    })
    


// API for Purchase details

//get API for purchase details

app.get("/readpurchase", (req,res)=>{

    const q = "SELECT * FROM purchase"
    db.query(q, (err, result)=>{
        res.send(result)
    })
})


// Post API for purchase details

app.post("/postpurchase", (req, res)=>{
    const date = req.body.date
    const bill = req.body.bill
    const item = req.body.item
    const amount = req.body.amount
    const catagory = req.body.catagory
    const source = req.body.source

    const InsertPurchase = "INSERT INTO purchase (`date`, `bill`, `item`, `amount`, `catagory`, `source`) VALUES (?)";
    const VALUES = [date, bill ,item, amount, catagory, source]
    db.query(InsertPurchase,[VALUES], (err, result)=>{
        if(!err){
            return console.log(result)
        } else {
            return console.log(err);
        }
    })
})


// maintenence account API's

// get API for owner table

app.get("/readmaintain", (req, res)=>{
    const q = "SELECT maintacc.itemId, maintacc.dateofpay, maintacc.mainItem, maintacc.vouch, maintacc.amount, maintacc.catagory, owneraccount.ownerId, owneraccount.dateofwith, owneraccount.name FROM maintacc INNER JOIN owneraccount ON maintacc.ownerId = owneraccount.ownerId";
    db.query(q, (err, result)=>{
        res.send(result)
    })
})

//post API for maintenence table

app.post("/postmaintain", (req, res)=>{

    const date = req.body.dateofpay
    const mainItem = req.body.mainItem
    const vouch = req.body.vouch
    const amount = req.body.amount
    const catagory = req.body.catagory
    const ownerId = req.body.ownerId

    console.log(date);
    console.log(mainItem);
    console.log(vouch);
    console.log(amount);
    console.log(catagory);
    console.log(ownerId);

    const InsertPost = "INSERT INTO maintacc (`dateofpay`, `mainItem`, `vouch`, `amount`, `catagory`, `ownerId`) VALUES (?)";
    VALUES =[date, mainItem, vouch, amount, catagory, ownerId]
    db.query(InsertPost, [VALUES], (err, result)=>{
        if(!err){
            return console.log(result)
        } else {
            console.log(err)
        }
    })
})


// Owner Account
// get Api for owner

app.get("/readowner", (req, res)=>{
    const q = "SELECT * FROM owneraccount"
    db.query(q, (err, result)=>{
        res.send(result)
    })
});

// post api for owner account

app.post("/postowner", (req, res)=>{

    const date = req.body.dateofwith;
    const name = req.body.name;
    const withdrawl = req.body.withdrawl;
    console.log(name)
    console.log(date)
    console.log(withdrawl);

    const q = "INSERT INTO owneraccount (`dateofwith`, `name`, `withdrawl`) VALUE(?)"
    const VALUES = [date, name, withdrawl]

    db.query(q,[VALUES], (err, result)=>{
       
        if(!err){
            console.log(result)
        } else {
            console.log(err)
        }
    })

});





app.listen(3001, ()=>{
    console.log("running on port 3001");
});