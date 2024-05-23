const express = require('express');
const connection = require('./db');

const PORT = process.env.PORT || 3001;

const app = express();

// Rest of the code...

app.get('/', (req, res) => {
  res.send('Api Backend Tienda');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


// Productos
// Productos nuevo
app.post('/api/producto', (req, res) => {
  const { nombre, descripcion, imagen, stock, precio } = req.body;
  connection.query(
    'INSERT INTO productos (nombre, descripcion, imagen, stock, precio) VALUES (?, ?, ?, ?)',
    [nombre, descripcion, imagen, stock, precio],
    (err, result) => {
      if (err) {
        console.error('Error creando producto:', err);
        res.status(500).json({ error: 'Error creando producto' });
      } else {
        console.log('Producto creado:', result.insertId);
        res.status(201).json({ message: 'Producto creado' });
      }
    }
  );
});

// Productos leer
app.get('/api/producto', (req, res) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error leyendo productos:', err);
      res.status(500).json({ error: 'Error leyendo productos' });
    } else {
      console.log('Todos los productos:', results);
      res.json(results);
    }
  });
});

// Productos obtener uno
app.get('/api/producto/:id', (req, res) => {
  const idProducto = req.params.id;
  connection.query('SELECT * FROM productos WHERE id = ?', [idProducto], 
  (err, results) => {
    if (err) {
      console.error('Error leyendo productos:', err);
      res.status(500).json({ error: 'Error leyendo productos' });
    } else {
      console.log('Producto:', results);
      res.json(results);
    }
  });
});

// Productos actualizar
app.put('/api/producto/:id', (req, res) => {
  const { nombre, descripcion, imagen, stock, precio } = req.body;
  const idProductoModificado = req.params.id;
  connection.query(
    'UPDATE productos SET nombre = ?, descripcion = ?, imagen = ?, stock = ?, precio = ? WHERE id = ?',
    [nombre, descripcion, imagen, stock, precio, idProductoModificado],
    (err, result) => {
      if (err) {
        console.error('Error actualizando producto:', err);
        res.status(500).json({ error: 'Error actualizando producto' });
      } else {
        console.log('Producto actualizado correctamente:', result.affectedRows);
        res.json({ message: 'Producto actualizado correctamente' });
      }
    }
  );
});

// Productos borrar
app.delete('/api/producto/:id', (req, res) => {
  const idProducto = req.params.id;
  connection.query(
    'DELETE FROM productos WHERE id = ?',
    [idProducto],
    (err, result) => {
      if (err) {
        console.error('Error borrando productos:', err);
        res.status(500).json({ error: 'Error borrando productos' });
      } else {
        console.log('Producto borrado:', result.affectedRows);
        res.json({ message: 'Producto borrado' });
      }
    }
  );
});

