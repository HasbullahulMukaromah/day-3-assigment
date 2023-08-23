const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const products = [
  {
     id: 1, 
    name: 'Produk A', 
    price: 10 
  },
  {
     id: 2, 
    name: 'Produk B',
     price: 20 
    },
  { 
    id: 3, 
    name: 'Produk C', 
    price: 15 
  },
  { 
    id: 4, 
    name: 'Produk D', 
    price: 27 
  },
  {
     id: 5, 
    name: 'Produk E', 
    price: 30 
  },
  {
     id: 6, 
    name: 'Produk F', 
    price: 34 
  },
  {
     id: 7, 
    name: 'Produk G', 
    price: 45 
  },
  { 
    id: 8, 
    name: 'Produk H', 
    price: 100 
  },
  { 
    id: 9, 
    name: 'Produk I', 
    price: 20 
  },
  {
     id: 10, 
    name: 'Produk J', 
    price: 10 
  },
];

// Mendapatkan daftar produk
app.get('/search-produk/:from-:to', (req, res) => {
  const from = parseInt(req.params.from);
  const to = parseInt(req.params.to);
// filter by params url (harga)
  const filteredProducts = products.filter(product => 
    product.price >= from && product.price <= to
  );
  res.json(filteredProducts) ({
      from: from,
      to: to
  })
});
// Mendapatkan daftar produk dengan filter berdasarkan id dan harga
app.get('/search-produk/:id.:harga', (req, res) => {
  const id = parseInt(req.params.id);
  const harga = parseInt(req.params.harga);

  const filteredProducts = products.filter(product => 
    product.id === id && product.price <= harga
  );

  res.json(filteredProducts);
});

// filter by params query

app.get('/search-produk/', (req, res) => {
  const id = req.query.id;
  const nama = req.query.nama;
  const harga = parseInt(req.query.harga);

  let filteredProducts = products;

  if (id) {
    filteredProducts = filteredProducts.filter(product => product.id === parseInt(id));
  }

  if (nama) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(nama.toLowerCase())
    );
  }

  if (!isNaN(harga)) {
    filteredProducts = filteredProducts.filter(product => product.price <= harga);
  }

  res.json(filteredProducts);
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
