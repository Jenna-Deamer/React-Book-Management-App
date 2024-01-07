import { useState, useEffect } from "react";

function Home({bookList, updateBookList }) {
  // var to hold the api data
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //add selected book to bookList when btn is clicked
  const addToBookList = (selectedBook) => {
    let isBookInList = false;
    //loop through bookList and check the selectedBook title on each book in list.
    // If there is a match set the checker variable to true and check the variable in another if
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].title === selectedBook.title) {
        isBookInList = true;
        break;
      }
    }
    if (isBookInList) {
      alert("You already have this book in your list!");
    } else {
      const updatedList = [...bookList, selectedBook]; // Create a new array and append selected book & current bookList
      updateBookList(updatedList); // Update the bookList in the app.js 
      localStorage.setItem("session", JSON.stringify(updatedList)); // Store updated list as json string in local storage
    }
  };

  //Google Book API docs. https://developers.google.com/books/docs/v1/using
  useEffect(() => {
    const fetchBooks = async (data) => {
      try {
        //api key from google book api
        const apiKey = process.env.REACT_APP_MY_API_KEY;
        //fetched from the environment variable
        
        //access google book api and get max6 results from history category
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=history&maxResults=6&key=${apiKey}`,
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
        //retrieve only title, author and thumbnail instead of everything
        const formattedBookData = data.items.map((books) => ({
          title: books.volumeInfo.title,
          //returns an array of authors since some books have multiple
          author: books.volumeInfo.authors,
          //returns a small thumbnail and regular sized thumbnail.
          coverImg: books.volumeInfo.imageLinks,
        }));
        //set stateHook
        setBooks(formattedBookData);
        // console.log(formattedBookData);
      } catch (error) {
        console.log(`error: ${error}`);
        setErrorMessage(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <main>
      <h1 className="pt-4 text-center">Welcome, Browse Books Below</h1>
      <h2 className="text-center pt-4">History</h2>
      {/**Display Fetched books in cards by mapping through all book objects & putting their data into the card structure below
       * Each card also has a button to add to list. Add selection to bookList & store in local storage.
       * Display the list on home & bookList.js
       */}
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
      
      <h2 className="text-center pt-4">Your List</h2>
      <div className="container">
        <div className="row">
          {/**Display Only 3 books from user list. View More button  */}
      {bookList.slice(0,3).map((book, index) => (
        <div className="bookCard col-lg-4 col-md-4 col-sm-6 mb-4 text-center" key={index}>
          <h5>{book.title}</h5>
          <img src={book.coverImg.thumbnail} alt={book.title}></img>
          <p className="mt-2">By: {book.author}</p>
        </div>
      ))}
      </div>
      <a href="/bookList" className="customBtn mb-2"><i class="bi bi-journal-bookmark-fill"></i> View All</a>
      </div>
      
    </main>
  );
}
export default Home;
