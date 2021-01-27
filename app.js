//import library
const express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

// create new express app 
const app = express();

//server configuration
const hostname = '192.168.43.226';
const port = 8080;


//create a route for the app
app.get('/', (req, res) => {
    res.send("Welcome to Detox");
})

//make server listen to request
app.listen(port, hostname, () => {
    console.log(`Server running at: http:// ${hostname}: ${port}/`);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/interestRequest', (req, res) => {
    try {
        var salutation = req.body.salutation;
        var name = req.body.name;
        var email = req.body.email;

        // console.log(salutation + "\n" + name + "\n" + email + "\n");

        res.status(200).send({
            "flag": 1,
            "message": "Thank you. Our sales person will contact you shortly"
        }
        )
    } catch (e) {
        console.log(e);
    }

});
