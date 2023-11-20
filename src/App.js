import './App.css';
//shared
import Header from "./views/shared/Header.js"
import Footer from "./views/shared/Footer.js"

//views 
import Home from "./views/Home.js"
import Booklist from "./views/Booklist.js"
import Search from "./views/Search.js"
import Settings from './views/Settings.js';

//library imports 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
           <BrowserRouter>
           <Header/>
          <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/booklist" element={<Booklist />} />
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
      </div>
  );
}

export default App;
