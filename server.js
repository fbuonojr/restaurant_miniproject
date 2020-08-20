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
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
})

app.get("/tables", function(req, res){
=======
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
})

app.get("/tables", function (req, res) {
>>>>>>> 20dd8d710b67be01a88b4664de9cd58a608c99bc
    res.sendFile(path.join(__dirname, "tables.html"));
})

//ROUTES FOR API TABLES
<<<<<<< HEAD
app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
=======
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
>>>>>>> 20dd8d710b67be01a88b4664de9cd58a608c99bc
    return res.json(waitlist);
})

//POST METHODS

<<<<<<< HEAD
app.post("/api/tables", function(req, res){
    var newGuest = req.body;
    console.log(newGuest);
    addGuest(newGuest);
    res.json(newGuest);
=======
app.post("/api/tables", function (req, res) {
    var newGuest = req.body;
    if (newGuest != null) {
        console.log(newGuest);
        let onReservations = addGuest(newGuest);
        res.json(onReservations);
    }
>>>>>>> 20dd8d710b67be01a88b4664de9cd58a608c99bc
})



// listener for PORT number
app.listen(PORT, function () {
    console.log("listening on: http://localhost:", PORT);
})

// function to add guest to waiting list/reservation list
function addGuest(guest) {
    if (tables.length > MAX_GUESTS) {
        waitlist.push(guest);
<<<<<<< HEAD
    } else {
        tables.push(guest);
    }
}

//Guest class
// class Guest {
//     constructor(id, name, email, phone){
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }}
=======
        return false;
    } else {
        tables.push(guest)
        return true;
    }
}

function removeGuest() {

}


//Guest class
class Guest {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
>>>>>>> 20dd8d710b67be01a88b4664de9cd58a608c99bc
