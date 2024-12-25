import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    SimpleGrid,
    Icon,
    Flex,
} from '@chakra-ui/react';
import { FaGift } from 'react-icons/fa';

const FreeOffersSection = () => {
    return (
        <Box bg="gray.100" py={16} px={8}>
            {/* Section Title */}
            <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={12}
                textTransform="uppercase"
                color="gray.700"
            >
                Free Offers
            </Heading>

            {/* Free Offers Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
                {/* Demo Versions */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    spacing={4}
                    textAlign="center"
                >
                    <Icon as={FaGift} w={10} h={10} color="green.500" />
                    <Heading as="h3" size="md" color="gray.700">
                        Demo Versions
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Try All EAs Risk-Free!
                    </Text>
                </VStack>

                {/* Free Coaching */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    spacing={4}
                    textAlign="center"
                >
                    <Icon as={FaGift} w={10} h={10} color="blue.500" />
                    <Heading as="h3" size="md" color="gray.700">
                        Free Coaching
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Learn to Trade Like a Pro.
                    </Text>
                </VStack>
            </SimpleGrid>

            {/* Call-to-Action */}
            <Flex justifyContent="center">
                <Button
                    bg="linear-gradient(90deg, yellow.400, yellow.600)"
                    color="black"
                    _hover={{ bg: 'yellow.500' }}
                    boxShadow="0px 0px 15px rgba(255, 215, 0, 0.7)"
                    size="lg"
                    leftIcon={<FaGift />}
                >
                    Claim Your Free Access
                </Button>
            </Flex>
        </Box>
    );
};

export default FreeOffersSection;
