import React from 'react';
import {
    Box,
    VStack,
    Button,
    Icon,
    Link,
} from '@chakra-ui/react';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const MessagingAppsComponent = () => {
    return (
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={4}
        >
            <VStack spacing={4}>
                {/* Telegram Button */}
                <Link href="https://t.me/YourTelegramUsername" isExternal>
                    <Button
                        leftIcon={<Icon as={FaTelegramPlane} />}
                        bg="linear-gradient(90deg, blue.400, blue.600)"
                        color="white"
                        _hover={{ bg: 'blue.500' }}
                        size="md"
                        width="100%"
                        backgroundColor={'blue.300'}
                    >
                    
                    </Button>
                </Link>

                {/* WhatsApp Button */}
                <Link
                    href="https://wa.me/YourWhatsAppNumber" // Replace 'YourWhatsAppNumber' with your WhatsApp phone number (e.g., 1234567890)
                    isExternal
                >
                    <Button
                        leftIcon={<Icon as={FaWhatsapp} />}
                        bg="linear-gradient(90deg, green.400, green.600)"
                        color="white"
                        _hover={{ bg: 'green.500' }}
                        size="md"
                        width="100%"
                        backgroundColor={'green.300'}
                    >
                        
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
};

export default MessagingAppsComponent;
