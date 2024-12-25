import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import { Box } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import FinancialLiteracySection from './components/FinancialLiteracySection';
import WealthManagementSection from './components/InvestmentSection';
import AdvantagesSection from './components/AdvantagesSection';
import ProductsSection from './components/ProductsSection';
import ProductsPage from './pages/ProductsPage';
import EventsSection from './components/EventsSection';
import FreeOffersSection from './components/FreeOffersSection';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';
import ContactSection from './components/ContactSection';
import MessagingAppsComponent from './components/MessagingAppsComponent';
function App() {
  return (
    <Router>
      <Box bg="#FAF6EE" minH="100vh">
        <Navbar />
        
        <Routes>
          {/* Main Home Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProductsPage />
                {/* <EventsSection /> */}
                <FinancialLiteracySection />
                <WealthManagementSection />
                <AdvantagesSection />
               
              </>
            }
          />
          {/* Products Page Route */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/offers" element={<FreeOffersSection />} />
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <MessagingAppsComponent />
        <FooterSection />
      </Box>
    </Router>
  );
}

export default App;
