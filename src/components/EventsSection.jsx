import React from 'react';
import {
    Box,
    Heading,
    Text,
    Button,
    VStack,
    SimpleGrid,
    Stack,
    Flex,
} from '@chakra-ui/react';

const EventsSection = () => {
    const streamingSchedule = [
        { day: 'Monday', time: '10:00 AM - 12:00 PM', link: '#monday-live' },
        { day: 'Tuesday', time: '2:00 PM - 4:00 PM', link: '#tuesday-live' },
        { day: 'Wednesday', time: '5:00 PM - 7:00 PM', link: '#wednesday-live' },
        { day: 'Thursday', time: '11:00 AM - 1:00 PM', link: '#thursday-live' },
        { day: 'Friday', time: '3:00 PM - 5:00 PM', link: '#friday-live' },
    ];

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
                Events & Live Streams
            </Heading>

            {/* Upcoming Event Card */}
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
                <Heading as="h3" size="lg" color="green.600" mb={4}>
                    Live Coaching: Scalping Secrets for Success
                </Heading>
                <Text fontSize="lg" color="gray.600" mb={4}>
                    Date: Saturday, March 18th, 2024
                </Text>
                <Text fontSize="lg" color="gray.600" mb={8}>
                    Time: 6:00 PM - 8:00 PM (GMT)
                </Text>
                <Button
                    bg="linear-gradient(90deg, green.400, green.600)"
                    color="white"
                    _hover={{ bg: 'green.500' }}
                    boxShadow="0px 0px 10px rgba(0, 255, 0, 0.5)"
                    size="lg"
                    backgroundColor={'green.400'}
                >
                    Register Now
                </Button>
            </Flex>

            {/* Streaming Schedule */}
            <Heading as="h3" size="md" textAlign="center" mb={8} color="gray.700">
                Weekly Streaming Schedule
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {streamingSchedule.map((schedule) => (
                    <VStack
                        key={schedule.day}
                        bg="white"
                        p={6}
                        borderRadius="lg"
                        boxShadow="md"
                        spacing={4}
                        textAlign="center"
                    >
                        <Text fontSize="xl" fontWeight="bold" color="gray.700">
                            {schedule.day}
                        </Text>
                        <Text fontSize="md" color="gray.600">
                            {schedule.time}
                        </Text>
                        <Button
                            bg="blue.400"
                            color="white"
                            _hover={{ bg: 'blue.500' }}
                            size="sm"
                        >
                            Watch Live
                        </Button>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default EventsSection;
