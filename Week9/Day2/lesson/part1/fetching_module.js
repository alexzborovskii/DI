async function userInfo() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        data = await response.json();
        return data
    }catch{
        throw new Error("Cant fetch")
    }
}

module.exports = {userInfo};