import { createContext, useState, useContext } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Create a Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN'); // Default language is English

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage); // Update the language
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext);
};
