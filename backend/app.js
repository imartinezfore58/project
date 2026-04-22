const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome to my API');
});

// Create a connection to the MySQL database
const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'internship'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  } 
    console.log('Connected to the MySQL database');
});

app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM information';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        return res.status(500).json({ error: 'Failed to fetch users' });
      }
      return res.json(results);
    });
  });

  app.get('/api/users/:id', (req, res) => {
    const{id}=req.params;
    const sql = 'SELECT * FROM information WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ error: 'Failed to fetch user' });
      }
      if (results.length === 0) { 
        return res.status(404).json({ error: 'User not found' });
      }
        return res.json(results);
    });
  });

  app.post('/api/users', (req, res) => {
 const{fname,lname,age,location}=req.body;
 const sql = 'INSERT INTO information (fname, lname, age, location) VALUES (?, ?, ?, ?)';
    db.query(sql, [fname, lname, age, location], (err, results) => {
        if (err) {
            console.error('Error creating user:', err);
            return res.status(500).json({ error: 'Failed to create user' });
        }
        return res.status(201).json({ message: 'User added successfully'});
    });
  });

  app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { fname, lname, age, location } = req.body;
    const sql = 'UPDATE information SET fname = ?, lname = ?, age = ?, location = ? WHERE id = ?';
    db.query(sql, [fname, lname, age, location, id], (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        return res.status(500).json({ error: 'Failed to update user' });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json({ message: 'User updated successfully' });
    });
  });

  app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM information WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        return res.status(500).json({ error: 'Failed to delete user' });
      }
      return res.status(200).json({ message: 'User deleted successfully' });
    });
  } );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

