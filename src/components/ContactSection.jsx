import React from 'react';
import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    Input,
    Textarea,
    Button,
    SimpleGrid,
    Link,
    Flex,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <Box bg="gray.50" py={16} px={8}>
            {/* Section Title */}
            <Heading
                as="h2"
                size="xl"
                textAlign="center"
                mb={8}
                textTransform="uppercase"
                color="gray.700"
            >
                Contact Us
            </Heading>

            {/* Grid Layout */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {/* Contact Info */}
                <VStack align="flex-start" spacing={6}>
                    <HStack>
                        <Icon as={FaPhoneAlt} w={6} h={6} color="green.500" />
                        <Text fontSize="lg" color="gray.600">
                            +123-456-7890
                        </Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaEnvelope} w={6} h={6} color="blue.500" />
                        <Link href="mailto:support@tradingea.com" fontSize="lg" color="gray.600">
                            support@tradingea.com
                        </Link>
                    </HStack>
                    <HStack>
                        <Icon as={FaMapMarkerAlt} w={6} h={6} color="red.500" />
                        <Text fontSize="lg" color="gray.600">
                            123 Scalping Street, Trade City
                        </Text>
                    </HStack>
                </VStack>

                {/* Contact Form */}
                <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                    <VStack spacing={4}>
                        <Input
                            placeholder="Your Name"
                            bg="gray.100"
                            _placeholder={{ color: 'gray.500' }}
                            size="lg"
                            borderRadius="md"
                        />
                        <Input
                            placeholder="Your Email"
                            bg="gray.100"
                            _placeholder={{ color: 'gray.500' }}
                            size="lg"
                            borderRadius="md"
                        />
                        <Textarea
                            placeholder="Your Message"
                            bg="gray.100"
                            _placeholder={{ color: 'gray.500' }}
                            size="lg"
                            borderRadius="md"
                        />
                        <Button
                            bg="linear-gradient(90deg, green.400, green.600)"
                            color="white"
                            _hover={{ bg: 'green.500' }}
                            size="lg"
                            width="100%"
                            backgroundColor={'green.300'}
                        >
                            Send Message
                        </Button>
                    </VStack>
                </Box>
            </SimpleGrid>

            {/* Map Embed (Optional) */}
            <Flex justify="center" mt={10}>
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531544876!3d-37.81627974201461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sTrade%20City!5e0!3m2!1sen!2s!4v1679985461948!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </Flex>
        </Box>
    );
};

export default ContactSection;
