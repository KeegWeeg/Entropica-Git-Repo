const users = []; //stores registered users

const express = require('express'); // Load Express
const path = require('path');       // Import 'path' 
const bodyParser = require('body-parser'); // Import 'body-parser' (for form data)
const sqlite3 = require('sqlite3').verbose(); //Import sqlite3 for user database



const publicDirectoryPath = path.join(__dirname, 'public'); // public directory path
const indexHtmlPath = path.join(publicDirectoryPath, 'index.html'); // 'index.html' path


const app = express(); // Create instance of Express
app.use(express.static(publicDirectoryPath)); // Middleware to serve static files from 'public'


app.get('/', (req, res) => {
    res.sendFile(indexHtmlPath); // Serve the 'index.html' 
});



app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse URL-encoded form data (e.g., data from HTML forms)

app.post("/register", (req, res) =>{ 
    const {username, password} = req.body;
        users.push({username, password});
        res.send(`User registerd: ${username}`);
    });



    const db = new sqlite3.Database('./users.db', (err) => {
        if (err) {
            console.error('Error opening database', err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });





const PORT = process.env.PORT || 3000; // Set the port to environment else default to 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
