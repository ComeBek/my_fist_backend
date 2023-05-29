const express = require('express');
const app = express();
const b_a = require('express-basic-auth'); 
var port = 8080;




let songs = ["New York","Accidents Will Happen","Adeste Fideles","Ad-Lib Blues","An Affair to Remember (Our Love Affair)","After You've Gone","Ain't She Sweet",
"Air For English Horn","Alice Blue Gown","All By Myself	","All I Do Is Dream of You	","All I Need is the Girl","All My Tomorrows","All of Me","All of You","All or Nothing at All",
"All the Things You Are","All the Way","All the Way Home","All This and Heaven Too"]

app.get('/', (req, res) => {
    res.send(songs[Math.floor(Math.random() * songs.length)]);
  })
app.get('/birth_date', (req, res) => {
    res.send("December 12, 1915");
})
app.get('/birth_city', (req, res) => {
    res.send("Hoboken, New Jersey");
})
app.get('/wives', (req, res) => {
    res.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
})
app.get('/picture', (req, res) => {
    res.redirect("https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg")
})
app.get('/public', (req, res) => {
    res.send("Everybody can see this page");
})
app.get('/protected', b_a({
    users: {'admin':'admin'},
    challenge: true,
    unauthorizedResponse: '401 Not authorized'
}),(req, res) => {
    res.send("Welcome, authenticated client");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})