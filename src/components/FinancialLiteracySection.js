import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Image } from "@chakra-ui/react";

const FinancialLiteracySection = () => {
    return (
        <Box
            as="section"
            bg="#003041" // Background color
            color="white"
            py={{ base: "8", xl: "12" }}
            px={{ base: "8", sm: "12", xl: "16" }}
            mb="12"
            mx="auto" // Center the section horizontally
            maxW="1200px" // Define the maximum width for the section
        >
            <HStack
                spacing={{ base: "8", xl: "24" }}
                flexDirection={{ base: "column", lg: "row" }}
                align="center"
            >
                {/* Text Content */}
                <VStack
                    align={{ base: "center", lg: "flex-start" }}
                    textAlign={{ base: "center", lg: "left" }}
                    spacing={5}
                    maxW={{ base: "100%", lg: "50%" }}
                >
                    <Heading as="h2" fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" lineHeight="1.2">
                        What is the state of financial literacy among the Swiss population?
                    </Heading>
                    <Text fontSize="lg" lineHeight="1.6">
                        To gain a better understanding, we teamed up with Michael Kendzia from the ZHAW School
                        of Management and Law to conduct a representative survey of over 2,000 people:
                    </Text>
                    <Button
                        as="a"
                        href="/en/financial-literacy/2024"
                        bg="orange.500"
                        color="white"
                        px="9"
                        py="4"
                        fontSize="xl"
                        fontWeight="normal"
                        _hover={{ bg: "orange.600" }}
                    >
                        Learn more
                    </Button>
                </VStack>

                {/* Placeholder GIF */}
                <Image
                    src="https://media.giphy.com/media/q12e4mhqGrHau8ti7v/giphy.gif" // Financial literacy placeholder GIF
                    alt="Financial Literacy Survey"
                    maxW="320px"
                    h="auto"
                    objectFit="cover"
                    borderRadius="md"
                />
            </HStack>
        </Box>
    );
};

export default FinancialLiteracySection;
