import { useState, useEffect } from "react";

function Home() {
  // var to hold the api data
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //Manage userBook list stored in local storage. Set empty by default
  const [bookList, setBookList] = useState([]);

  //retrieve bookList from local storage on render.
  useEffect(() => {
    //local storage is storing json data as strings, convert json string back to object
    //if the bookList is null [] it results in error. Default to empty array if null
    const storedBookList = JSON.parse(localStorage.getItem("session")) || [];
    console.log("Stored Book List:", storedBookList);
    setBookList(storedBookList);
  }, []); //[] make this run once.

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
    //if isBookInList true, alert the user that the book they selected is already in their list.
    if (isBookInList) {
      alert(`You already have this book in your list!`);
      //if isBookInList is not true then there is no match. Append the new book to their list.
    } else {
      console.log("book is not in list");
      //append the bookList & new book to new var to keep track
      const updatedBookList = [...bookList, selectedBook];
      //update state with new list
      console.log("Updated Book List:", updatedBookList);
      console.log(bookList);
      setBookList(updatedBookList);

      //update local storage to persist the list by storing json object as a string
      localStorage.setItem("session", JSON.stringify(updatedBookList));
      console.log(bookList);
    }
  };

  //Google Book API docs. https://developers.google.com/books/docs/v1/using
  useEffect(() => {
    const fetchBooks = async (data) => {
      try {
        //api key from google book api
        const apiKey = "AIzaSyDBPaqAUVP3097fwDVUFdB0ssLIvSqSSdk";
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
                className="btn btn-info"
                onClick={() => addToBookList(book)}
              >
                <i class="bi bi-plus"></i> Add to List
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <h2 className="text-center pt-4">Fantasy</h2>
	  <div className="container">
		<div className="row">
		  {books.map((book, index) => (
			<div
			  className="bookCard col-lg-4 col-md-4 col-sm-6 mb-4"
			  key={index}
			>
			  <h5>{book.title}</h5>
			  <img src={book.coverImg.thumbnail} alt={book.title}></img>
			  <p className="mt-2">By: {book.author}</p>
			  <button className="btn btn-info">Add to List</button>
			</div>
		  ))}
		</div>
	  </div> */}
      <h2 className="text-center pt-4">Your List</h2>
      {bookList.map((book, index) => (
        <div className="bookCard" key={index}>
          <h5>{book.title}</h5>
          <img src={book.coverImg.thumbnail} alt={book.title}></img>
          <p className="mt-2">By: {book.author}</p>
        </div>
      ))}
      <button className="btn btn-info">View Whole List</button>
    </main>
  );
}
export default Home;
