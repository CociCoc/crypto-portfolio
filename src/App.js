import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import {LogInButton} from './components/Battons';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Tokens from "./components/Tokens";
import { Route, Routes } from "react-router-dom";

function App() {

        return (
    <>


        <NavBar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Tokens" element={<Tokens />} />
            </Routes>
        </div>




    </>
  );
}

export default App
