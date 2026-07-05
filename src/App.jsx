import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import CustomCursor from './components/CustomCursor';
import CustomScrollbar from './components/CustomScrollbar';
import SelectionHighlight from './components/SelectionHighlight';
import './index.css';

function App() {
    useEffect(() => {
        if (!document.documentElement.hasAttribute('data-theme')) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTopOnNavigate />
            <div className="App">
                <CustomCursor />
                <CustomScrollbar />
                <SelectionHighlight />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <ScrollToTop />
            </div>
        </BrowserRouter>
    );
}

export default App;
