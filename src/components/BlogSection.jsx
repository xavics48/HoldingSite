import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Flex,
    Icon,
    Image,
} from '@chakra-ui/react';
import { FaTrophy } from 'react-icons/fa';
import Slider from 'react-slick';

const BlogSection = () => {
    const latestArticles = [
        {
            title: 'The Secrets of Scalping Success',
            icon: '/blog-icon1.png', // Replace with your actual icon path
        },
        {
            title: 'How to Master Trading Psychology',
            icon: '/blog-icon2.png', // Replace with your actual icon path
        },
        {
            title: 'Advanced Strategies for Platinum EA',
            icon: '/blog-icon3.png', // Replace with your actual icon path
        },
        {
            title: 'Why Scalping Works in Volatile Markets',
            icon: '/blog-icon4.png', // Replace with your actual icon path
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box bg="gray.50" py={16} px={8}>
            {/* Section Title */}
            <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={12}
                textTransform="uppercase"
                color="gray.700"
            >
                Blog
            </Heading>

            {/* Featured Blog Post */}
            <Flex
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                p={8}
                mb={12}
                direction="column"
                alignItems="center"
                textAlign="center"
                maxW="lg"
                mx="auto"
            >
                <Icon as={FaTrophy} w={20} h={20} color="gold" mb={4} />
                <Heading as="h3" size="lg" color="gray.700" mb={4}>
                    Maximizing Scalping Profits with Gold EA
                </Heading>
                <Text fontSize="md" color="gray.600" mb={8}>
                    Learn the best strategies to maximize your profits with our cutting-edge Gold EA.
                </Text>
                <Button
                    bg="linear-gradient(90deg, yellow.400, yellow.600)"
                    color="black"
                    _hover={{ bg: 'yellow.500' }}
                    boxShadow="0px 0px 15px rgba(255, 215, 0, 0.7)"
                    size="lg"
                >
                    Read More
                </Button>
            </Flex>

            {/* Latest Articles Carousel */}
            <Heading as="h3" size="md" textAlign="center" mb={8} color="gray.700">
                Latest Articles
            </Heading>
            <Box maxW="800px" mx="auto">
                <Slider {...settings}>
                    {latestArticles.map((article, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            alignItems="center"
                            bg="white"
                            p={6}
                            borderRadius="lg"
                            boxShadow="md"
                            textAlign="center"
                        >
                            <Image
                                src={article.icon}
                                alt={article.title}
                                boxSize="100px"
                                mb={4}
                            />
                            <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={4}>
                                {article.title}
                            </Text>
                            <Button
                                bg="blue.500"
                                color="white"
                                _hover={{ bg: 'blue.600' }}
                                size="sm"
                            >
                                Read More
                            </Button>
                        </Flex>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default BlogSection;
