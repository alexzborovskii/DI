// const {info} = require('./modules/app.js');
import info from "./modules/app.js";
// import slugify from "slugify";

info().then((data) => console.log(data)).catch((e)=>console.log(e));

// const slug = slugify('some string');
// console.log(slug);
