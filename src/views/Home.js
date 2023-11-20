import { useState, useEffect } from "react";

function Home() {
  // var to hold the api data
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //fetch 10 books from history category formGoogle Book API
  useEffect(() => {
    const fetchBooks = async (data) => {
      try {
        //api key from google book api
        const apiKey = "AIzaSyDBPaqAUVP3097fwDVUFdB0ssLIvSqSSdk";
        //access google book api and get max5 results from history category
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=history&maxResults=5&key=${apiKey}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
           
          } );
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
        setBooks(formattedBookData);
        console.log(formattedBookData);
      } catch (error) {
        console.log(`error: ${error}`);
        setErrorMessage(error);
      }
    };
    fetchBooks();
  }, []);
 
  return (
    <main>
      <h1 className="pt-4">Welcome, Browse Books Below</h1>
      <h2>History</h2>
      {/**Display Fetched books in cards by mapping through all book objects & putting their data into the card structure below
       * Each card also has a button to add to list. Add selection to bookList & store in locale storage. 
       * Display the list on home * bookList.js
      */}
      {books.map((book, index) => (
        <div className="bookCard" key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.coverImg.thumbnail} alt={book.title}></img>
          <button className="btn btn-info">Add to List</button>
        </div>
      ))}
      <h2>Your List</h2>
      <div className="bookList"></div>
      <button className="btn btn-info">View Whole List</button>
    </main>
  );
}
export default Home;
