// const data = {
//   title: "ddd",
//   author: "ddd",
//   publication_date: "2002-05-01",
//   price: 100,
// };

// fetch("http://localhost:8000/books/create/", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });



fetch("http://localhost:8000/books/all/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });


const add = async() => {
    let book = {
        title: "ccc",
        author: "cca",
        publication_date: "2002-09-01",
        price: 100,
    }

    let options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body:  JSON.stringify(book),
    };

    try{
      const res = await fetch('http://127.0.0.1:8000/books/create/', options);
      const data = await res.json();
      console.log('return data=> ', data)
    } catch(e) {
      console.log(e)
    }

  }