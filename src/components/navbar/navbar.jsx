import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Events & Live Streams', href: '/events' },
    { name: 'Free Offers', href: '/offers' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkBgHover = useColorModeValue('gray.700', 'gray.600');
  const bgColor = useColorModeValue('gray.800', 'gray.900');

  return (
    <Box bg={bgColor} px={4} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <HStack spacing={8} alignItems="center">
          <Box>
            <Image src="/logo.png" alt="Logo" boxSize="50px" />
          </Box>

          {/* Desktop Links */}
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  color: isActive ? 'yellow.300' : 'white',
                  backgroundColor: isActive ? linkBgHover : 'transparent',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        {/* CTA Button */}
        <Flex alignItems="center">
          <Button
            bgGradient="linear(to-r, yellow.300, yellow.400)"
            color="black"
            _hover={{ bgGradient: 'linear(to-r, yellow.400, yellow.500)' }}
            px={6}
            py={2}
            rounded="md"
            animation="pulse 1.5s infinite"
          >
            Try Our Demo
          </Button>
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Links */}
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '5px',
                  color: isActive ? 'yellow.300' : 'white',
                  backgroundColor: isActive ? linkBgHover : 'transparent',
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
