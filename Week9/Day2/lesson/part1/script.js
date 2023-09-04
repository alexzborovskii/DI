const {userInfo} = require('./fetching_module');

// userInfo().then(data=> console.log(data))

(async() => {
    const data = await userInfo();
    console.log(data);
})()