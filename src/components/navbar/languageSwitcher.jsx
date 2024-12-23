import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useLanguage } from './languageContext'; 

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage(); 

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
        _hover={{ color: 'orange.500' }}
      >
        {language} 
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage('EN')}>EN</MenuItem>
        <MenuItem onClick={() => changeLanguage('DE')}>DE</MenuItem>
        <MenuItem onClick={() => changeLanguage('FR')}>FR</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
