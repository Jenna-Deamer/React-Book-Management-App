import { useState, useEffect } from "react";
 //get bookList from app.js  
function Booklist ({bookList, updateBookList }){
    //remove selectedBook from bookList
const deleteSelectedBook = (selectedBook) =>{
  
    //create new bookArray

    //remove selected book & append curren tBookList
}
    return(
        <main className="container">
            <h1 className=" text-center pt-4">Your List</h1>
            
            {bookList.map((book, index) => (
        <div className="bookCard" key={index}>
          <h5>{book.title} <button className="btn btn-danger"   onClick={() => deleteSelectedBook(bookList)}><i class="bi bi-x-lg"></i></button></h5>
          <img src={book.coverImg.thumbnail} alt={book.title}></img>
          <p className="mt-2">By: {book.author}</p>
        </div>
      ))}
            <button className="btn btn-primary">Add New</button>
        </main>
    )
}

export default Booklist;