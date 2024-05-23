const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'aca3poo2',
  password: 'aca3poo2',
  database: 'aca3software'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;