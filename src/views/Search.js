import { useState, useEffect } from "react";

function Search({ bookList, updateBookList }) {
  //track books & search term
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        //api key from google book api
        const apiKey = "AIzaSyDBPaqAUVP3097fwDVUFdB0ssLIvSqSSdk";
        //access google book api and get max6 results from history category
        const response = await fetch(
          //fetch books based off user input
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //if response is not okay throw error
        if (!response.ok) {
          throw new Error("Api Fetch Error");
        }
        // if no error, grab the book data from the json response & set with State Hook
        const data = await response.json();
        //retrieve title, authors, img
        const formattedBookData = data.items.map((books) => ({
          title: books.volumeInfo.title,
          author: books.volumeInfo.authors,
          //set img to what is found in json, if img is null set to placeholder generated from betterPlaceholder.com
          coverImg: books.volumeInfo.imageLinks
            ? books.volumeInfo.imageLinks
            : "https://fakeimg.pl/125x200?text=Cover+Missing",
        }));
        //set books state
        setBooks(formattedBookData);
      } catch (error) {
        console.log(`error: ${error}`);
      }
      // Clear books if the search term is empty
      if (searchTerm === "") {
        setBooks([]);
      }
    };

    fetchBooks();
  }, [searchTerm]); //run every time searchTerm changes.

  //track changes on textInput
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToBookList = (selectedBook) => {
    let isBookInList = false;
    //check bookList
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].title === selectedBook.title) {
        isBookInList = true;
        break;
      }
    }
    //if match alert user
    if (isBookInList) {
      alert("You already have this book in your list!");
    } else {
      const updatedList = [...bookList, selectedBook];
      updateBookList(updatedList); // Update the bookList in the app.js
      localStorage.setItem("session", JSON.stringify(updatedList));
    }
  };

  return (
    <main className="container">
      <h1 className="pt-4 text-center">Search by Title</h1>

      <div className="row justify-content-center"> 
      <div className="col-lg-6 col-md-8 col-sm-10"> 
        <fieldset className="pt-4 pb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Start typing here to search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </fieldset>
      </div>
    </div>

      <div className="container">
        <div className="row">
          {books.map((book, index) => (
            <div
              className="bookCard col-lg-4 col-md-4 col-sm-6 mb-4 text-center"
              key={index}
            >
              <h5>{book.title}</h5>
              <img src={book.coverImg.thumbnail} alt={book.title}></img>
              <p className="mt-2">By: {book.author}</p>
              <button
                className="customBtn"
                onClick={() => addToBookList(book)}
              >
                <i class="bi bi-plus"></i> Add to List
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Search;
