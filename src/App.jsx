import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Listings from './pages/Listings.jsx';
import ListingDetail from './pages/ListingDetail.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import AdminLayout from './components/admin/AdminLayout.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminItems from './pages/admin/AdminItems.jsx';
import AdminCommonList from './pages/admin/AdminCommonList.jsx';
import AdminEditItem from './pages/admin/AdminEditItem.jsx';

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <div className="app-wrapper">
                <Routes>
                    {/* Main Site Routes */}
                    <Route path="/*" element={
                        <>
                            <Header />
                            <main>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/listings" element={<Listings />} />
                                    <Route path="/listing/:id" element={<ListingDetail />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/faq" element={<FAQ />} />
                                </Routes>
                            </main>
                            <Footer />
                        </>
                    } />

                    {/* Admin Routes */}
                    <Route path="/admin/*" element={
                        <AdminLayout>
                            <Routes>
                                <Route path="/" element={<AdminDashboard />} />
                                <Route path="/items" element={<AdminItems />} />
                                <Route path="/items/edit/:id" element={<AdminEditItem />} />
                                <Route path="/categories" element={<AdminCommonList type="Categories" />} />
                                <Route path="/makes" element={<AdminCommonList type="Makes" />} />
                                <Route path="/models" element={<AdminCommonList type="Models" />} />
                                <Route path="/configuration" element={<div>System Settings</div>} />
                            </Routes>
                        </AdminLayout>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
