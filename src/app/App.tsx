import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import ExperimentPage from "./pages/ExperimentPage";
import Footer from "./pages/Footer";
import FrameworkPage from "./pages/FrameworkPage";

function App() {
    return (
        <>
            <MainPage/>
            <ExperimentPage/>
            <FrameworkPage/>
            <Footer/>
        </>
    );
}

export default App;
