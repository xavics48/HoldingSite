import React from "react";
import { Box, Heading, Text, Button, VStack, HStack, Image, Link } from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <Box
            as="section"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            px={{ base: "6", md: "20" }}
            py={{ base: "12", md: "20" }}
            bg="#FAF6EE" // Updated to match the beige background
            mx="auto" // Center the section horizontally
            maxW="1200px" // Define the maximum width for the section
        >
            {/* Left Text Content */}
            <VStack
                align="flex-start"
                spacing={5}
                maxW={{ base: "100%", md: "50%" }}
                textAlign={{ base: "center", md: "left" }}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    color="black"
                    fontWeight="bold"
                    lineHeight="1.2"
                >
                    Investing has never been this simple
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.6">
                    You want to make sound investments without excessive fees? Open a True Wealth account
                    today and never look back.
                </Text>
                <HStack spacing={4}>
                    <Button
                        colorScheme="orange"
                        size="lg"
                        px="8"
                        rightIcon={<span style={{ fontSize: "1.2em" }}>→</span>}
                        fontWeight="normal"
                    >
                        Open account
                    </Button>
                    <Link
                        fontSize="lg"
                        fontWeight="medium"
                        color="orange.500"
                        textDecoration="underline"
                        _hover={{ textDecoration: "none", color: "orange.700" }}
                    >
                        Open test account
                    </Link>
                </HStack>
            </VStack>

            {/* Right Image Content */}
            <Box
                position="relative"
                maxW={{ base: "100%", md: "50%" }}
                mt={{ base: "8", md: "0" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {/* Smartphone and Laptop Image */}
                <Image
                    src="https://images.prismic.io/truewealth/be6eeb5f-5bd5-4dd7-b54b-923cdec4fd06_v3a-EN-laptop-phone-combo%402x.png"
                    alt="Laptop and Phone"
                    objectFit="contain"
                    maxH="400px"
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
