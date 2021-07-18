import {  BrowserRouter } from "react-router-dom";
import Routes from './Router/Routers';
// import logo from './logo.svg';
import vaccineKids from "./img/vaccine1.jpg";
import vaccineKids2 from "./img/vaccine2.jpg";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <div style={{ backgroundImage: `url(${vaccineKids})`, height: "8rem" }} className="imageLoaderDiv"></div>
            <section className="App-header classy-subtle-dark-gray-gradient text-font">
              
            <Routes/>
            </section>
        </div>
        </BrowserRouter>
    );
}

export default App;
