import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/Home/page";

function App() {
    
    return (
        <>
        <Router>
            <Home />
        </Router>
        </>
    );
}

export default App;
