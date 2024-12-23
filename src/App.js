import React from 'react';
import Navbar from './components/navbar/navbar';
import { Box, Button } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import FinancialLiteracySection from './components/FinancialLiteracySection';
import WealthManagementSection from './components/InvestmentSection';
import AdvantagesSection from './components/AdvantagesSection';
function App() {
  return (
    <>
      <Box bg="#FAF6EE" minH="100vh">
      <Navbar />
      <HeroSection /> 
      <FinancialLiteracySection />
        <WealthManagementSection />
        <AdvantagesSection />
      </Box>
    </>
  );
}

export default App;