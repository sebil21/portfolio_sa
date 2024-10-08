import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './components/Error404';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Router>
            <LoadingPage />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
