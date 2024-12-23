import React, { useState, useEffect } from 'react';
import { Flex, Box, Spacer, Button, Text, Center } from '@chakra-ui/react';
import NavbarItem from './navbarItem';
import NavbarMenu from './navbarMenu';
import LanguageSwitcher from './languageSwitcher';
import { LockIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the vertical scroll position
      setIsScrolled(scrollTop > 50); // If scrolled more than 50px, set to true
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      position="fixed" // Makes the navbar fixed at the top
      top="0"
      left="0"
      right="0"
      zIndex="1000" // Ensures it stays above other content
      transition="background-color 0.3s ease" // Smooth transition effect
      bg={isScrolled ? 'beige' : 'transparent'} // Background color on scroll
      boxShadow={isScrolled ? 'md' : 'none'} // Add shadow when scrolled
    >
      {/* Logo */}
      <Box
        flex={1}
        display="flex"
        alignItems="center" // Align items vertically in the center
        justifyContent="center" // Align items horizontally in the center
      >
        <img src="/logo.png" alt="AIIMEEA" width="50px" height="20px" />
        <Text fontSize="xl" fontWeight="bold" color="black" ml="2">
          AIIMEEA
        </Text>
      </Box>
      <Box width="90px" />
      {/* Links */}
      <Flex align="center" gap={6}>
        <NavbarMenu
          label="Invest"
          leftItems={[
            {
              label: 'Sample portfolio',
              description: 'See for yourself how to invest',
              link: '/sample-portfolio',
            },
            {
              label: 'Child portfolio',
              description: 'An investment in the future',
              link: '/child-portfolio',
            },
            {
              label: 'Pillar 3a',
              description: 'Maximum convenience and return for your Pillar 3a',
              link: '/pillar-3a',
            },
          ]}
          rightItems={[
            { label: 'Why True Wealth', link: '/why-true-wealth' },
            { label: 'Who is it for?', link: '/who-is-it-for' },
            { label: 'It’s that simple', link: '/its-that-simple' },
            { label: 'Sustainability', link: '/sustainability' },
          ]}
        />
        <NavbarItem label="Pricing" />
        <NavbarItem label="Blog & News" />
        <NavbarMenu
          label="Company"
          leftItems={[
            { label: 'About us', link: '/about-us' },
            { label: 'Press', link: '/press' },
            { label: 'Help Center', link: '/help-center' },
          ]}
          rightItems={[]} // Empty right column for "Company"
        />
      </Flex>

      <Spacer />

      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Buttons */}
      <Flex align="center" gap={4}>
        <Button variant="outline" colorScheme="gray" leftIcon={<LockIcon />}>
          Login
        </Button>
        <Button colorScheme="orange">Open Account</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
