import React from "react";
import { Box, VStack, Heading, Text, SimpleGrid, Icon, Divider } from "@chakra-ui/react";
import { FaPercentage, FaRecycle, FaShieldAlt } from "react-icons/fa";

const AdvantagesSection = () => {
    return (
        <Box
            as="section"
            bg="#FAF6EE" // Beige background color
            py={{ base: "12", md: "16" }}
            px={{ base: "6", md: "12", xl: "16" }}
            maxW="1200px" // Set max width
            mx="auto" // Center the section horizontally
        >
            <Heading
                as="h2"
                textAlign="center"
                fontSize={{ base: "2xl", md: "3xl" }}
                mb={{ base: "8", md: "12" }}
                fontWeight="bold"
            >
                Your advantages with True Wealth
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: "6", md: "8" }}>
                {/* Card 1 */}
                <VStack
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    p={{ base: "6", md: "8" }}
                    spacing="4"
                    align="stretch"
                    h="100%"
                >
                    <Icon as={FaPercentage} w={12} h={12} color="orange.500" alignSelf="center" />
                    <Heading as="h3" fontSize="lg" fontWeight="bold" textAlign="center" mt="4">
                        Low costs and fees
                    </Heading>
                    <Divider my="4" />
                    <Text fontSize="md">
                        Management Fee:{" "}
                        <Text as="span" fontWeight="bold">
                            0.25 to 0.5%
                        </Text>
                    </Text>
                    <Text fontSize="md">Custody Fee: 0</Text>
                    <Text fontSize="md">Kickbacks: 0</Text>
                    <Text fontSize="md">Deposits / Withdrawals: 0</Text>
                    <Text fontSize="md">Transaction Costs: 0</Text>
                    <Text fontSize="md">Tax Statement: 0</Text>
                </VStack>

                {/* Card 2 */}
                <VStack
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    p={{ base: "6", md: "8" }}
                    spacing="4"
                    align="stretch"
                    h="100%"
                >
                    <Icon as={FaRecycle} w={12} h={12} color="orange.500" alignSelf="center" />
                    <Heading as="h3" fontSize="lg" fontWeight="bold" textAlign="center" mt="4">
                        Individual Strategy
                    </Heading>
                    <Divider my="4" />
                    <Text fontSize="md">
                        Define a strategy that is tailored to your individual situation, but still adjustable at
                        any time.
                    </Text>
                    <Text fontSize="md">
                        Choose our{" "}
                        <Text as="a" href="#" color="orange.500" textDecoration="underline">
                            sustainable
                        </Text>{" "}
                        investment universe at no extra cost.
                    </Text>
                    <Text fontSize="md">
                        No lock-in, no minimum term, close your account at any time. Your wealth is at your
                        disposal.
                    </Text>
                </VStack>

                {/* Card 3 */}
                <VStack
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    p={{ base: "6", md: "8" }}
                    spacing="4"
                    align="stretch"
                    h="100%"
                >
                    <Icon as={FaShieldAlt} w={12} h={12} color="orange.500" alignSelf="center" />
                    <Heading as="h3" fontSize="lg" fontWeight="bold" textAlign="center" mt="4">
                        Secure and Automated
                    </Heading>
                    <Divider my="4" />
                    <Text fontSize="md">
                        With True Wealth you have a fully automated investment solution that works out of the
                        box.
                    </Text>
                    <Text fontSize="md">
                        With our intuitive web and mobile application and clear and transparent reporting,
                        investing has never been easier.
                    </Text>
                </VStack>
            </SimpleGrid>
        </Box>
    );
};

export default AdvantagesSection;
