import { useState, useEffect } from "react";
 //get bookList from app.js  
function Booklist ({bookList, updateBookList }){
    //remove selectedBook from bookList
const deleteSelectedBook = (selectedBook) =>{
  //loop through bookList to find index of selected book
  for (let i = 0; i < bookList.length; i++) {
    if (bookList[i].title === selectedBook.title) {
          //once found remove that book from new array
       bookList.splice(i,1);
       console.log(bookList)

       const updatedList = [...bookList]; ///append new bookList to  new array updatedList
       updateBookList(updatedList); // Update the bookList in the app.js 
      
       localStorage.setItem("session", JSON.stringify(updatedList)); // Store updated list as json string in local storage
       return;
    }  };
}
    return(
        <main className="container">
            <h1 className=" text-center pt-4">Your List</h1>
            <div className="container">
        <div className="row">
            {bookList.map((book, index) => (
        <div className="bookCard col-lg-4 col-md-4 col-sm-6 mb-4 text-center mt-4" key={index}>
          <h5>{book.title} <button className="btn btn-danger"   onClick={() => deleteSelectedBook(book)}><i class="bi bi-x-lg"></i></button></h5>
          <img src={book.coverImg.thumbnail} alt={book.title}></img>
          <p className="mt-2">By: {book.author}</p>
        </div>
      ))}
       </div>
        </div>
            <button className="btn btn-primary">Add New</button>
        </main>
    )
}

export default Booklist;