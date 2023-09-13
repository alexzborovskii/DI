const { products } = require("../config/db.js");
const {
    _getAllProducts,
    _getProduct,
    _searchProduct,
    _insertProduct,
    _updateProduct,
    _deleteProduct
} = require("../models/products.model.js");

const getAllProducts = (req, res) => {
    _getAllProducts()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json({ msg: "not found" });
        });
};

const searchProduct = async (req, res) => {
    try {
        const data = await _searchProduct(req.query.name);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await _getProduct(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: "noproduct match id" });
    }

    /* just another way */
    //   const id = req.params.id;
    // _getProduct(id)
    // .then((data) => {
    //     res.json(data);
    // })
    // .catch((err) => {
    //     console.log(err);
    //     res.status(404).json({ msg: "not found" });
    // });
};

const createProduct = async (req, res) => {
    try {
        const data = await _insertProduct(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: "product not created" });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params.id;
    try {
        const data = await _updateProduct(req.body, id);
        res.json(data)
    } catch (error) {
      console.log(error)
      res.status(404).json({msg:error.message});
    }
};

const deleteProduct = async(req, res) => {
    const { id } = req.params.id;
    try {
        const data = await _deleteProduct(req.body, id);
        res.json(data)
    } catch (error) {
      console.log(error)
      res.status(404).json({msg:error.message});
    }
};

module.exports = {
    getAllProducts,
    searchProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
