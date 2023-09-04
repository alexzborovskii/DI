// const axios = require ('axios'); // common js syntax
import axios from "axios";

const info = async() => {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;
    }catch(e){
        console.log(e);
    }
}

export default info;

// module.exports = {info};