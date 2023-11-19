import './App.css';
//shared
import Header from "./views/shared/Header.js"
import Footer from "./views/shared/Footer.js"
//views 
import Home from "./views/Home.js"
import About from "./views/About.js"
import Details from "./views/Details.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
           <BrowserRouter>
           <Header/>
          <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/details" element={<Details />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </main>
      </div>
  );
}

export default App;
