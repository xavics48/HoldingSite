import React from "react";
import { Box, Flex, Text, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Input, Button, Table, Tbody, Tr, Td, Th, Thead, VStack, HStack } from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

const WealthManagementSection = () => {
    return (
        <Box
            bg="white"
            p={{ base: 6, md: 10 }}
            maxW="1200px"
            mx="auto"
            boxShadow="md"
            rounded="md"
        >
            <Heading size="lg" mb={4}>
                Wealth management. As simple as it gets.
            </Heading>
            <Text color="gray.600" mb={8}>
                You set the direction and keep full control over your investment
                strategy. Let us do the work: Always diversified, highly automated and
                thus much more efficient than investing has ever been.
            </Text>

            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems="center"
                justifyContent="space-between"
                gap={10}
            >
                {/* Left Section: Investment Inputs */}
                <VStack align="start" spacing={6} flex="1">
                    <Box w="full">
                        <Text fontWeight="medium" mb={1}>
                            Your investment amount{" "}
                            <Text as="span" fontSize="sm" color="gray.500">
                                (CHF)
                            </Text>
                        </Text>
                        <Flex align="center" gap={2}>
                            <Input
                                type="number"
                                value="100000"
                                min={0}
                                borderColor="gray.300"
                                maxW="200px"
                            />
                            <Text fontWeight="bold">CHF</Text>
                        </Flex>
                    </Box>

                    <Box w="full">
                        <Text fontWeight="medium" mb={1}>
                            Your risk tolerance
                        </Text>
                        <Slider aria-label="risk-tolerance-slider" defaultValue={80}>
                            <SliderTrack>
                                <SliderFilledTrack bg="orange.400" />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Text mt={2} fontSize="sm" color="gray.600">
                            Aggressive (higher risk)
                        </Text>
                    </Box>

                    <Text fontSize="sm" color="gray.600">
                        Yearly fee: <strong>0.50%</strong> (per quarter: CHF 125)
                        <br />
                        Product Costs (Ø TER): <strong>0.13%</strong>
                    </Text>
                </VStack>

                {/* Right Section: Investment Strategy */}
                <VStack align="start" flex="1" spacing={6}>
                    <Heading size="md">Investment Strategy</Heading>
                    <Text fontSize="sm" color="gray.600">
                        Sample strategy for investors with higher risk tolerance.
                    </Text>
                    <Flex direction={{ base: "column", md: "row" }} gap={6}>
                        {/* Pie Chart */}
                        <Box>
                            <PieChart
                                data={[
                                    { title: "Cash", value: 1, color: "#787878" },
                                    { title: "Bonds", value: 8, color: "#00a8df" },
                                    { title: "Real Estate", value: 5, color: "#9dd600" },
                                    { title: "Natural Resources", value: 4, color: "#ffea00" },
                                    { title: "Equities", value: 82, color: "#dd8217" },
                                ]}
                                lineWidth={30}
                                paddingAngle={5}
                                radius={42}
                                label={({ dataEntry }) => `${dataEntry.value}%`}
                                labelStyle={{
                                    fontSize: "6px",
                                    fontWeight: "bold",
                                    fill: "#fff",
                                }}
                                labelPosition={60}
                            />
                        </Box>

                        {/* Table */}
                        <Box>
                            <Table variant="simple" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Asset Class</Th>
                                        <Th textAlign="right">Allocation</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <HStack>
                                                <Box
                                                    w="10px"
                                                    h="10px"
                                                    bg="#787878"
                                                    borderRadius="full"
                                                />
                                                <Text>Cash</Text>
                                            </HStack>
                                        </Td>
                                        <Td textAlign="right">1%</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <HStack>
                                                <Box
                                                    w="10px"
                                                    h="10px"
                                                    bg="#00a8df"
                                                    borderRadius="full"
                                                />
                                                <Text>Bonds</Text>
                                            </HStack>
                                        </Td>
                                        <Td textAlign="right">8%</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <HStack>
                                                <Box
                                                    w="10px"
                                                    h="10px"
                                                    bg="#9dd600"
                                                    borderRadius="full"
                                                />
                                                <Text>Real Estate Investment Trusts</Text>
                                            </HStack>
                                        </Td>
                                        <Td textAlign="right">5%</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <HStack>
                                                <Box
                                                    w="10px"
                                                    h="10px"
                                                    bg="#ffea00"
                                                    borderRadius="full"
                                                />
                                                <Text>Natural Resources</Text>
                                            </HStack>
                                        </Td>
                                        <Td textAlign="right">4%</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <HStack>
                                                <Box
                                                    w="10px"
                                                    h="10px"
                                                    bg="#dd8217"
                                                    borderRadius="full"
                                                />
                                                <Text>Equities</Text>
                                            </HStack>
                                        </Td>
                                        <Td textAlign="right">82%</Td>
                                    </Tr>
                                    <Tr fontWeight="bold">
                                        <Td>Total</Td>
                                        <Td textAlign="right">100%</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                    </Flex>
                </VStack>
            </Flex>

            {/* CTA */}
            <Box mt={8} textAlign="left">
                <Button
                    bg="gray.100"
                    color="gray.700"
                    _hover={{ bg: "gray.200" }}
                    px={8}
                    py={4}
                >
                    See sample portfolio
                </Button>
            </Box>
        </Box>
    );
};

export default WealthManagementSection;
