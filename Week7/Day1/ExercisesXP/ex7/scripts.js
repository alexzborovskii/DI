let allBooks = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: " J. K. Rowling",
        image: "https://m.media-amazon.com/images/I/51SkIDTd9rL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        alreadyRead: true,
    },
    {
        title: "The Hitchhiker’s Guide to the Galaxy",
        author: "Douglas Adams",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
        alreadyRead: false,
    },

];


for (book of allBooks) {
    // adding div
    bookDiv = document.createElement("div");
    firstSection = document.querySelector("section");
    firstSection.appendChild(bookDiv);

    // filling the div
    bookHeader = document.createElement("h4");
    bookHeader.innerText = `${book['title']} written by ${book['author']}`
    bookDiv.appendChild(bookHeader);

    bookImage = document.createElement("img");
    bookImage.src = book['image'];
    bookImage.width = "100";
    bookDiv.appendChild(bookImage);

    if (book['alreadyRead']) {
        bookDiv.style.backgroundColor = "red";
    }
}