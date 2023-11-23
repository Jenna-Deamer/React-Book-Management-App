import "./App.css";
//shared
import Header from "./views/shared/Header.js";
import Footer from "./views/shared/Footer.js";

//views
import Home from "./views/Home.js";
import Booklist from "./views/Booklist.js";
import Search from "./views/Search.js";
import Settings from "./views/Settings.js";

//library imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  
  //Manage userBook list stored in local storage. Set empty by default
  const [bookList, setBookList] = useState([]);
  //retrieve bookList from local storage on render.
  useEffect(() => {
    const storedBookList = JSON.parse(localStorage.getItem("session")) || [];
    setBookList(storedBookList);
  }, []);//[] make this run once.

  //store updated bookList into local storage as json string
  const updateBookList = (updatedList) => {
    setBookList(updatedList);
    localStorage.setItem("session", JSON.stringify(updatedList));
  };

  return (
    <main>
      <BrowserRouter>
        <Header />
        <section className="contentWrapper pb-2">
          <Routes>
            <Route
              path="/"
              element={
                <Home bookList={bookList} updateBookList={updateBookList} />
              }
            />

            <Route
              path="/booklist"
              element={<Booklist bookList={bookList}  updateBookList={updateBookList}/>}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
