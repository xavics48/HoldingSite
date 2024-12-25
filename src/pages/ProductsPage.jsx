import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    SimpleGrid,
    Circle,
} from '@chakra-ui/react';

const ProductsPage = () => {
    return (
        <Box bg="gray.100" py={16} px={8}>
            {/* Page Title */}
            <Heading
                as="h1"
                size="xl"
                textAlign="center"
                mb={12}
                textTransform="uppercase"
                color="gray.700"
            >
                Our Expert Advisors
            </Heading>

            {/* Products Grid */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {/* Silver EA */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    spacing={4}
                    minH="350px" // Ensures consistent card height
                    justifyContent="space-between" // Ensures proper vertical alignment
                >
                    <Circle size="100px" bg="gray.300" boxShadow="0px 0px 10px silver">
                        {/* Icon Placeholder */}
                    </Circle>
                    <Heading as="h3" size="md" color="gray.700">
                        Silver EA
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Markets: XAU/USD, EUR/USD, CAD/USD
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        Features:
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Automated trading strategies.
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Perfect balance between risk and reward.
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Quick setup and easy customization.
                    </Text>
                    <Box mt="auto">
                        <Button bg="silver" color="black" _hover={{ bg: 'gray.500' }}>
                            Explore Silver EA
                        </Button>
                    </Box>
                </VStack>

                {/* Gold EA */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    spacing={4}
                    minH="350px"
                    justifyContent="space-between"
                >
                    <Circle size="100px" bg="gold" boxShadow="0px 0px 10px gold">
                        {/* Icon Placeholder */}
                    </Circle>
                    <Heading as="h3" size="md" color="gray.700">
                        Gold EA
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Markets: XAU/USD, EUR/USD, CAD/USD, S&P 500, Dow Jones, DAX
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        Features:
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Advanced market analysis and signal systems.
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Support for multiple asset classes.
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Increased profitability with cutting-edge algorithms.
                    </Text>
                    <Box mt="auto">
                        <Button bg="gold" color="black" _hover={{ bg: 'yellow.500' }}>
                            Explore Gold EA
                        </Button>
                    </Box>
                </VStack>

                {/* Platinum EA */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    spacing={4}
                    minH="350px"
                    justifyContent="space-between"
                >
                    <Circle size="100px" bg="gray.500" boxShadow="0px 0px 10px gray">
                        {/* Icon Placeholder */}
                    </Circle>
                    <Heading as="h3" size="md" color="gray.700">
                        Platinum EA
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Markets: XAU/USD, EUR/USD, CAD/USD, S&P 500, Dow Jones, Nasdaq,
                        Oil, Bitcoin
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        Features:
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Comprehensive market coverage.
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - AI-powered trading strategies.
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                        - Maximum flexibility and performance across all markets.
                    </Text>
                    <Box mt="auto">
                        <Button bg="gray.600" color="white" _hover={{ bg: 'gray.800' }}>
                            Explore Platinum EA
                        </Button>
                    </Box>
                </VStack>
            </SimpleGrid>
        </Box>
    );
};

export default ProductsPage;
