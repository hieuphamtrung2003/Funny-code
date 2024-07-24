import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sorry from "./Components/Sorry/Sorry";
import Success from "./Components/Sucess/Sucess";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sorry />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    );
}

export default App;
