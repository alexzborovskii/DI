const express = require("express");
const dotenv = require("dotenv");
const { products } = require("./config/db.js");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const PORT = 3001;

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

//CRUD - Read - get all products
app.get("/api/products", (req, res) => {
  res.send(products);
});

//CRUD - Read - get all products - query string ?
// /api/products?name=ip
//query
app.get("/api/products/search", (req, res) => {
  const productName = req.query.name;

  const filteredProducts = products.filter((item) => {
    return item["name"].toLowerCase().includes(productName.toLocaleLowerCase());
  });

  if (filteredProducts.length === 0) {
    return res.status(200).json({ msg: "no matched to your search" });
  }

  res.status(200).json(filteredProducts);
  //   const productName = req.query.name;
  //   const filteredProducts = products.filter((item) => {
  //     return item.name.toLowerCase().includes(productName.toLowerCase());
  //   });

  //   if (filteredProducts.length === 0) {
  //     return res.status(200).json({ msg: "no matched to your search" });
  //   }
  //   res.status(200).json(filteredProducts);
});

//CRUD - Read - get one products
///api/products/1

// app.get("/api/products/:id/", (req, res) => {
//     // const params = req.params;
//     // res.json({msg: "ok"});
//     // res.send(products[params["id"]])
//     const id = req.params.id;
//     // console.log(params);
//     const product = products.find((item) => item.id == id);
//     if(!product) return res.sendStatus(404); //res.send(404).json({msg:'Product not found'})
//     res.json(product);
//   });

// body - POST/PUT
// CRUD - create a new product - POST {"name": "iKey", "price":750}
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.json(products);
});

// CRUD - Update a product - PUT {"name": "iKey", "price":750}
// params - id of the product /1
// body - send a new name and a new price:  iPhone11 899
// response with all products
app.put("/api/products/:id/", (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  let index = products.findIndex((item) => (item.id = id));
  products[index] = { ...products[index], name: name, price: price };
  res.json(products);
});

app.delete("/api/products/:id/", (req, res) => {
  const id = req.params.id;
  const index = products.findIndex((item) => (item.id = id));
  if (index === -1) return res.status(404).json({ msg: "not found" });
  products.splice(index, 1);
  res.json(products);
});

// app.get()
// app.post()
// app.pu()
// app.delete()
