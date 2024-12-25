import React from 'react';
import {
    Box,
    Flex,
    Text,
    Button,
    Heading,
    VStack,
    HStack,
    Circle,
} from '@chakra-ui/react';
import Slider from "react-slick";

const HeroSection = () => {
    // Settings for the React Slick carousel
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval (3 seconds)
        arrows: false, // Disable left/right arrows
    };

    return (
        <Box
            position="relative"
            bg="linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))"
            color="white"
            height="100vh"
            overflow="hidden" // Prevent horizontal scrolling
            px={4}
        >
            <Flex
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                height="100%"
            >
                {/* Headline */}
                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="bold"
                    textTransform="uppercase"
                    mb={4}
                >
                    Achieve Scalping Perfection with Our Expert Advisors!
                </Heading>

                {/* Subtext */}
                <Text fontSize="lg" mb={8} maxW="2xl">
                    Trade smarter, faster, and more profitably with cutting-edge automation.
                </Text>

                {/* Carousel */}
                <Box w="80%" maxW="600px" mx="auto" mb={8}>
                    <Slider {...settings}>
                        {/* Silver EA */}
                        <VStack spacing={4}>
                            <Circle
                                size="150px"
                                bg="gray.500"
                                boxShadow="0px 0px 10px rgba(255, 255, 255, 0.5)"
                            />
                            <Text fontSize="lg" fontWeight="bold">
                                Perfect for Beginners and Experienced Traders
                            </Text>
                        </VStack>
                        {/* Gold EA */}
                        <VStack spacing={4}>
                            <Circle
                                size="150px"
                                bg="gold"
                                boxShadow="0px 0px 10px rgba(255, 255, 0, 0.5)"
                            />
                            <Text fontSize="lg" fontWeight="bold">
                                For Ambitious Traders Aiming Higher
                            </Text>
                        </VStack>
                        {/* Platinum EA */}
                        <VStack spacing={4}>
                            <Circle
                                size="150px"
                                bg="gray.300"
                                boxShadow="0px 0px 10px rgba(192, 192, 192, 0.8)"
                            />
                            <Text fontSize="lg" fontWeight="bold">
                                Premium Solution for Professional Traders
                            </Text>
                        </VStack>
                    </Slider>
                </Box>

                {/* CTA Buttons */}
                <HStack spacing={4}>
                    <Button
                        bg="yellow.500"
                        _hover={{ bg: "yellow.600" }}
                        color="black"
                        size="lg"
                    >
                        Learn More
                    </Button>
                    <Button
                        bg="blue.500"
                        _hover={{ bg: "blue.600" }}
                        color="white"
                        size="lg"
                    >
                        Get Started
                    </Button>
                </HStack>
            </Flex>
        </Box>
    );
};

export default HeroSection;
