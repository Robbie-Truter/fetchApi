const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require('body-parser');
const request = require('request');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());


// http://localhost:8000/github/(typed username)
// get gitHub details by username
app.get('/github/:login', (req ,res) => {
    request({
            method: 'GET',
            uri: 'https://api.github.com/users/' + req.params.login,
            Accept: 'application/vnd.github.v3+json',
            headers: {'User-Agent': 'Timothylang-tech'}
        },
        function (error, response){
            const data = response.body;
            const apiData = JSON.parse(data)
            console.log('Returned: ', apiData)

            if(response.statusCode == 200){
                console.log('success');
                res.send(apiData)
            }
            else{
                console.log("error with api call")
                res.send('Username nonexistent')
            }
        });
});


// http://localhost:8000/gitlab/(typed username)
// get gitLab details by username
app.get('/gitlab/:name', (req ,res) => {
    request({
            method: 'GET',
            uri: 'https://gitlab.com/api/v4/'+ 'users?username='+ req.params.name,
        },
        function (error, response){
            const data = response.body;
            const apiData = JSON.parse(data)
            console.log('Returned: ', apiData)

            if(response.statusCode == 200){
                console.log('success');
                res.send(apiData)
            }
            else{
                console.log("error with api call")
                res.send('Username nonexistent')
            }
        });
});


// Seems like I cannot get bitbucket user details with username as a endpoint?
// Have to use user id e.g. "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443" -(random user id)
// http://localhost:8000/gitlab/(typed user-id)
app.get('/bitbucket/:account_id', (req ,res) => {
    request({
            method: 'GET',
            uri: 'https://api.bitbucket.org/2.0/users/'+ req.params.account_id,
        },
        function (error, response){
            const data = response.body;
            const apiData = JSON.parse(data)
            console.log('Returned: ', apiData)

            if(response.statusCode == 200){
                console.log('success');
                res.send(apiData)
            }
            else{
                console.log("error with api call")
                res.send('User id nonexistent')
            }
        });
});


//localhost 8000
app.get("/", (req, res) => {
    res.send("Hello World!,port 8000 working successfully");
});


//listening on port 8000
app.listen(port, ()=>console.log('Listening on port 8000'))


module.exports = app;