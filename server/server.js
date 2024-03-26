const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Update the port if necessary

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Update with your MySQL password
  database: 'db', // Update with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle saving credentials
app.post('/api/credentials', (req, res) => {
  const { password, url } = req.body;

  // Insert credentials into the 'credentials' table
  const query = 'INSERT INTO credentials (password, url) VALUES (?, ?)';
  connection.query(query, [password, url], (err, result) => {
    if (err) {
      console.error('Error saving credentials:', err);
      res.status(500).json({ error: 'An error occurred while saving credentials' });
      return;
    }
    console.log('Credentials saved successfully');
    res.status(200).json({ message: 'Credentials saved successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
