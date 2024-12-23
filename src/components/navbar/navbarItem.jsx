// components/Navbar/NavbarItem.jsx
import { Text } from '@chakra-ui/react';

const NavbarItem = ({ label }) => {
  return (
    <Text
      as="a"
      href="#"
      fontSize="md"
      fontWeight="medium"
      _hover={{ color: 'orange.500' }}
    >
      {label}
    </Text>
  );
};

export default NavbarItem;
