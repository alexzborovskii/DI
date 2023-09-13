import {useState, useEffect} from "react";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
    //
    const [products, setProducts] = useState();
    const [search, setSearch] = useState()
    //
    useEffect(()=>{
        allProducts();
    }, [])
    //
    const allProducts = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/`)
            const data = await res.json();
            // console.log("data=>", data)
            setProducts(data);
        } catch (e) {
            console.log(e)
        }
    }

    // const searchProduct = async (value) => {
    //     try {
    //         console.log("value=>", value)
    //         const res = await fetch(`${BASE_URL}/api/products/search?name=${value}`)
    //         const data = await res.json()
    //         console.log("data: ", data)
    //         data && setProducts(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleSearch = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/products/search?name=${search}`)
            const data = await res.json()
            console.log("data: ", data)
            data && setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Shop</h1>
            <div>
                {/* <input onChange={(e) => searchProduct(e.target.value)}/><button>Search</button> */}
                <input onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>

            {
                products&&products.map(item=>{
                    return(
                    <div key={item.id} style={{
                        display:"inline-block",
                        margin: "20px",
                        padding: "20px",
                        border: "1px solid black",
                    }}>
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                    </div>)
                })
            }
        </>
    )
}

export default Products;