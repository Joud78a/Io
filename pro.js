const books = [
    { name: "Meu Pé de Laranja Lima", author: "José Mauro de Vasconcelos", year: "1968", description: "The novel tells the story of Zezé,<br> a young boy from a poor family,<br> who lives in the Brazilian countryside.<br> Zezé is a sensitive and imaginative child <br>who finds solace and friendship<br> in a sweet orange tree in his backyard.<br> He names the tree Minguinho,and it becomes his<br> confidant and source of comfort.", category: "fiction book", cover: "book1.jpg", status: "New" },
    { name: "Daddy-Long-Legs", author: "Jean Webster", year: "1912", description: " The novel follows the story of Jerusha Abbott,<br> a young girl who grew up in an orphanage and is<br> given a rare opportunity for education by a mysterious <br>benefactor known as Daddy-Long-Legs due<br> to his tall and shadowy figure.The novel is known<br> for its light and engaging<br> style and is narrated through <br>a series of letters written<br> by Jerusha to Daddy-Long-Legs", category: "Children's literature book", cover: "book2.jpg", status: "Read" },
    { name: "White Nights", author: "Fyodor Dostoevsky", year: "1918", description: "It follows the story of a man who is alone and isolated in St<br>. Petersburg. He is desperate for companionship,<br> and when he meets a young woman he believes<br> may be his soulmate, he is filled with hope<br>. Through his conversations with her<br>, he attempts to understand <br>the meaning of love, loneliness and friendship. ", category: "Romantic novel", cover: "book3.jpg", status: "Read" },
    { name: "One Hundred Years of Solitude", author: " Gabriel Garcia Marquez", year: "2006", description: "<br>One Hundred Years of Solitude is the first piece<br> of literature since the Book of Genesis that should <br>be required reading for the entire human race<br>. . . . Mr. Garcia Marquez has done nothing less than to create<br> in the reader a sense of all that is profound, <br>meaningful, and meaningless in life.", category: "nonfiction", cover: "book4.jpg", status: "New" },
    { name: "The Alchemist", author: " Paulo Coelho", year: "2014", description: "tells the mystical story of Santiago<br> an Andalusian shepherd boy who<br> yearns to travel in search of a worldly treasure. <br>His quest will lead him to riches far different<br>—and far more satisfying—than he ever imagined<br>. Santiago's journey teaches us about the essential <br>wisdom of listening to our hearts,<br> of recognizing opportunity and learning <br>to read the omens strewn along life's path, and,<br> most importantly, to follow our dreams.", category: "Intellectual novel", cover: "book5.jpg", status: "New" },

];

let viewCount = 0;

function displayBooks() {
    const categoryFilter = document.getElementById("category").value;
    const bookList = document.getElementById("book-list-ul");
    bookList.innerHTML = "";

    const filteredBooks = categoryFilter === "all" ? books : books.filter(book => book.category === categoryFilter);

    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<li style="color:#f2f2f2; font-family: Times New Roman; font-size: 25px;">No books found for this category</li>';
    } else {
        // Generate the list of books as usual
        filteredBooks.forEach(book => {
            const bookLi = document.createElement("li");
            bookLi.innerHTML = `
            <img src="${book.cover}" alt="Book Cover">
            <h3>${book.name}</h3>
            <p>Author:</p><p1>${book.author}</p1>
            <p>Year:</p><p1>${book.year}</p1>
            <p>Description:</p><p1>${book.description}<p1>
            <p>Category:</p><p1> ${book.category}</p1>
            <p>Status:</p><p1>${book.status}</p1>
            `;
            bookList.appendChild(bookLi);
        });
    }
}    

function addNewBook() {
    const name = document.getElementById("new-book-name").value;
    const author = document.getElementById("new-book-author").value;
    const year = document.getElementById("new-book-year").value;
    const description = document.getElementById("new-book-description").value;
    const category = document.getElementById("new-book-category").value;
    const cover = document.getElementById("new-book-cover").value;

    const newBook = {
        name,
        author,
        year,
        description,
        category,
        cover,
        status: "New", 
    };

    books.push(newBook);
    displayBooks();
}

function removeBook() {
    const name = document.getElementById("remove-book-name").value;
    const index = books.findIndex(book => book.name === name);

    if (index !== -1) {
        books.splice(index, 1);
        displayBooks();
    }
}

function changeBookStatus() {
    const name = document.getElementById("change-status-name").value;
    const status = document.getElementById("change-status").value;
    const book = books.find(book => book.name === name);

    if (book) {
        book.status = status;
        displayBooks();
    }
}

function incrementViewCount() {
    viewCount++;
    document.getElementById("count").textContent = viewCount;
}

displayBooks();

function filterBooks() {
    displayBooks();
}
