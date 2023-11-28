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
  }, []); //[] make this run once.

  //store updated bookList into local storage as json string
  const updateBookList = (updatedList) => {
    setBookList(updatedList);
    localStorage.setItem("session", JSON.stringify(updatedList));
  };

  //darkTheme toggled from Settings.js
  //fet last theme choice from localStorage
  const storedTheme = localStorage.getItem("theme");
  //check if string in local storage is equal to "dark"
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme === "dark");
  //if it does not equal dark or is null set theme to light. if true set to dark
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    //store theme to localStorage
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <main>
      <BrowserRouter>
        <Header />
        <section
          className={`contentWrapper ${
            isDarkTheme ? "darkTheme" : "lightTheme"
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home bookList={bookList} updateBookList={updateBookList} />
              }
            />

            <Route
              path="/booklist"
              element={
                <Booklist bookList={bookList} updateBookList={updateBookList} />
              }
            />
            <Route
              path="/search"
              element={
                <Search bookList={bookList} updateBookList={updateBookList} />
              }
            />
            <Route
              path="/settings"
              element={
                <Settings isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
              }
            />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
