import React, { useState, useEffect } from "react";
import './starter.css';
import Home from "../home/Home.jsx";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            {/* Page Home toujours présente */}
            <Home />

            {/* Loader au-dessus */}
            {loading && (
                <div className="loader">
                    <h1 className="loader-text">&lt;</h1>
                    <h1 className="loader-slash">/</h1>
                    <h1 className="loader-text">&gt;</h1>
                </div>
            )}
        </div>
    );
}
