import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
    //
    const [products, setProducts] = useState();
    const [search, setSearch] = useState();
    // const [newProduct, setNewProduct] = useState({});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    //
    useEffect(() => {
        allProducts();
    }, []);
    //
    const allProducts = async () => {
        try {
            const res = await fetch(`/api/products`);
            const data = await res.json();
            // console.log("data=>", data)
            setProducts(data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleSearch = async () => {
        try {
            const res = await fetch(
                `${BASE_URL}/api/products/search?name=${search}`
            );
            const data = await res.json();
            console.log("data: ", data);
            data && setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddProduct = async (e) => {
        console.log("newProduct=> ", name, price);
        e.preventDefault();
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, price})
            });
            const data = await res.json();
            console.log("data:", data)
            // allProducts()
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Shop</h1>
            <div>
                {/* <input onChange={(e) => searchProduct(e.target.value)}/><button>Search</button> */}
                <input onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <form id="add-form" onSubmit={handleAddProduct}>
                    Name: <input onChange={(e) => setName(e.target.value)} />
                    Price: <input onChange={(e) => setPrice(e.target.value)} />
                    <input type="submit" value="add product" />
                </form>
            </div>
            {products &&
                products.map((item) => {
                    return (
                        <div
                            key={item.id}
                            style={{
                                display: "inline-block",
                                margin: "20px",
                                padding: "20px",
                                border: "1px solid black",
                            }}>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`}>Shop now</Link>
                        </div>
                    );
                })}
        </>
    );
};

export default Products;
