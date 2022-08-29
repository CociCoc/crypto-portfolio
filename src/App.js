import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import {LogInButton} from './components/Battons';
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About"
import Tokens from "./components/Tokens"

function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/tokens":
            component = <Tokens />
            break
        case "/about":
            component = <About />
            break
    }
        return (
    <>

        <LogInButton />
        <NavBar />
        <div className="container">
            {component}
        </div>




    </>
  );
}

export default App;
