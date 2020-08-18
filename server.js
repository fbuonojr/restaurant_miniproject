// Required packages
const express = require("express");
const path = require("path");


//Blank arrays for 
var tables = [];
var waitlist = [];
const MAX_GUESTS = 5;

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.json());


// ROUTES FOR HTML PAGES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
})

//ROUTES FOR API TABLES
app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
})

//POST METHODS

app.post("/api/tables", function(req, res){
    var newGuest = req.body;
    console.log(newGuest);
    addGuest(newGuest);
    res.json(newGuest);
})



// listener for PORT number
app.listen(PORT, function () {
    console.log("listening on: http://localhost:", PORT);
})

// function to add guest to waiting list/reservation list
function addGuest(guest) {
    if (tables.length > MAX_GUESTS) {
        waitlist.push(guest);
    } else {
        tables.push(guest);
    }
}

//Guest class
class Guest {
    constructor(id, name, email, phone){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}