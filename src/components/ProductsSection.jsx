import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    SimpleGrid,
    Circle,
    Stack,
} from '@chakra-ui/react';

const ProductsSection = () => {
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
                    _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                >
                    {/* Placeholder Icon */}
                    <Circle size="100px" bg="gray.300" boxShadow="0px 0px 10px silver">
                        {/* Icon Placeholder */}
                    </Circle>
                    <Heading as="h3" size="md" color="gray.700">
                        Silver EA
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Scalping for XAU/USD, EUR/USD, CAD/USD.
                    </Text>
                    <Button
                        bg="linear-gradient(90deg, silver, gray)"
                        color="black"
                        _hover={{
                            bg: "linear-gradient(90deg, gray, silver)",
                        }}
                        boxShadow="0px 0px 10px silver"
                    >
                        Explore Silver EA
                    </Button>
                </VStack>

                {/* Gold EA */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    spacing={4}
                    _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                >
                    {/* Placeholder Icon */}
                    <Circle size="100px" bg="gold" boxShadow="0px 0px 10px gold">
                        {/* Icon Placeholder */}
                    </Circle>
                    <Heading as="h3" size="md" color="gray.700">
                        Gold EA
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        Multi-market scalping.
                    </Text>
                    <Button
                        bg="linear-gradient(90deg, gold, yellow)"
                        color="black"
                        _hover={{
                            bg: "linear-gradient(90deg, yellow, gold)",
                        }}
                        boxShadow="0px 0px 10px gold"
                    >
                        Explore Gold EA
                    </Button>
                </VStack>

                {/* Platinum EA */}
                <VStack
                    bg="white"
                    p={6}
                    borderRadius="md"
                    boxShadow="lg"
                    textAlign="center"
                    spacing={4}
                    _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                >
                    {/* Placeholder Icon */}
                    <Circle size="100px" bg="gray.500" boxShadow="0px 0px 10px gray">
                        {/* Icon Placeholder */}
                    </Circle>
                    <Heading as="h3" size="md" color="gray.700">
                        Platinum EA
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                        All-in-one scalping solution for pro traders.
                    </Text>
                    <Button
                        bg="linear-gradient(90deg, gray, white)"
                        color="black"
                        _hover={{
                            bg: "linear-gradient(90deg, white, gray)",
                        }}
                        boxShadow="0px 0px 10px gray"
                    >
                        Explore Platinum EA
                    </Button>
                </VStack>
            </SimpleGrid>
        </Box>
    );
};

export default ProductsSection;
