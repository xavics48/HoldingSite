import React from 'react';
import {
    Box,
    Flex,
    Text,
    VStack,
    HStack,
    IconButton,
    Input,
    Button,
    Link,
    Icon,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitch, FaFacebook } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <Box bg="gray.800" color="white" py={10} px={8}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="flex-start"
                mb={8}
            >
                {/* Contact Information */}
                <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold">
                        Contact Information
                    </Text>
                    <Text>Email: support@tradingea.com</Text>
                    <Text>Phone: +123-456-7890</Text>
                    <Text>Address: 123 Scalping Street, Trade City</Text>
                </VStack>

                {/* Social Media Links */}
                <VStack align="flex-start" spacing={4} mb={{ base: 8, md: 0 }}>
                    <Text fontSize="lg" fontWeight="bold">
                        Follow Us
                    </Text>
                    <HStack spacing={4}>
                        <Link href="https://instagram.com" isExternal>
                            <IconButton
                                icon={<FaInstagram />}
                                bgGradient="linear(to-r, pink.400, pink.600)"
                                color="white"
                                _hover={{ bgGradient: 'linear(to-r, pink.500, pink.700)' }}
                                size="lg"
                                aria-label="Instagram"
                                isRound
                            />
                        </Link>
                        <Link href="https://twitch.com" isExternal>
                            <IconButton
                                icon={<FaTwitch />}
                                bgGradient="linear(to-r, purple.400, purple.600)"
                                color="white"
                                _hover={{ bgGradient: 'linear(to-r, purple.500, purple.700)' }}
                                size="lg"
                                aria-label="Twitch"
                                isRound
                            />
                        </Link>
                        <Link href="https://facebook.com" isExternal>
                            <IconButton
                                icon={<FaFacebook />}
                                bgGradient="linear(to-r, blue.400, blue.600)"
                                color="white"
                                _hover={{ bgGradient: 'linear(to-r, blue.500, blue.700)' }}
                                size="lg"
                                aria-label="Facebook"
                                isRound
                            />
                        </Link>
                    </HStack>
                </VStack>

                {/* Newsletter Signup */}
                <VStack align="flex-start" spacing={4}>
                    <Text fontSize="lg" fontWeight="bold">
                        Stay Updated
                    </Text>
                    <Text>Stay updated on trading trends!</Text>
                    <HStack>
                        <Input
                            placeholder="Enter your email"
                            bg="white"
                            color="gray.800"
                            _placeholder={{ color: 'gray.500' }}
                            borderRadius="md"
                        />
                        <Button
                            bgGradient="linear(to-r, green.400, green.600)"
                            color="white"
                            _hover={{ bgGradient: 'linear(to-r, green.500, green.700)' }}
                            size="md"
                        >
                            Subscribe
                        </Button>
                    </HStack>
                </VStack>
            </Flex>

            {/* Footer Bottom */}
            <Text textAlign="center" fontSize="sm" color="gray.500">
                © {new Date().getFullYear()} Trading EA. All rights reserved.
            </Text>
        </Box>
    );
};

export default FooterSection;
