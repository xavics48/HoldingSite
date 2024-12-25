import React from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Table,
    Tbody,
    Tr,
    Td,
    Th,
    Thead,
    VStack,
    Button,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WealthManagementSection = () => {
    const navigate = useNavigate();

    const barData = {
        labels: ["Silver EA", "Gold EA", "Platinum EA"],
        datasets: [
            {
                label: "Feature Allocation (%)",
                data: [20, 30, 50], // Replace with actual data
                backgroundColor: ["#C0C0C0", "#FFD700", "#B0C4DE"], // Silver, Gold, Platinum colors
                borderWidth: 1,
                borderColor: ["#999", "#CCAC00", "#8CA0BC"],
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Feature Distribution Across Products",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };

    return (
        <Box
            bg="white"
            p={{ base: 4, md: 8 }}
            maxW="1200px"
            mx="auto"
            boxShadow="md"
            rounded="md"
            overflow="hidden" // Prevent horizontal overflow
        >
            {/* Section Title */}
            <Heading size="lg" mb={4} textAlign="center">
                Choose the Right EA for Your Trading Needs
            </Heading>
            <Text color="gray.600" mb={8} textAlign="center">
                Explore our range of Expert Advisors designed to suit traders of all experience levels.
            </Text>

            {/* Content Layout */}
            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "flex-start" }}
                justifyContent="space-between"
                gap={6} // Adjusted to avoid excessive spacing
                w="100%" // Ensure full-width alignment
            >
                {/* Left Section: Table */}
                <Box flex="1" w="100%" overflowX="auto"> {/* Allow table scrolling on small screens */}
                    <Heading size="md" mb={4} textAlign={{ base: "center", lg: "left" }}>
                        Product Overview
                    </Heading>
                    <Table variant="simple" size="md" maxW="100%">
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th>Markets</Th>
                                <Th>Features</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Silver EA</Td>
                                <Td>XAU/USD, EUR/USD, CAD/USD</Td>
                                <Td>
                                    - Automated trading strategies<br />
                                    - Perfect balance between risk and reward<br />
                                    - Quick setup and easy customization
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Gold EA</Td>
                                <Td>XAU/USD, EUR/USD, CAD/USD, S&P 500, Dow Jones, DAX</Td>
                                <Td>
                                    - Advanced market analysis and signal systems<br />
                                    - Support for multiple asset classes<br />
                                    - Increased profitability with cutting-edge algorithms
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Platinum EA</Td>
                                <Td>
                                    XAU/USD, EUR/USD, CAD/USD, S&P 500, Dow Jones, Nasdaq, Oil, Bitcoin
                                </Td>
                                <Td>
                                    - Comprehensive market coverage<br />
                                    - AI-powered trading strategies<br />
                                    - Maximum flexibility and performance across all markets
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>

                {/* Right Section: Bar Chart */}
                <VStack align="center" flex="1" w="100%" spacing={6}>
                    <Heading size="md" textAlign="center">
                        Feature Distribution
                    </Heading>
                    <Box w="100%" maxW={{ base: "300px", md: "500px" }} h="300px" overflow="hidden">
                        <Bar data={barData} options={barOptions} />
                    </Box>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                        Distribution based on popularity and functionality.
                    </Text>
                </VStack>
            </Flex>

            {/* CTA */}
            <Box mt={8} textAlign="center">
                <Button
                    bg="blue.500"
                    color="white"
                    _hover={{ bg: "blue.600" }}
                    px={8}
                    py={4}
                    onClick={() => navigate("/products")}
                >
                    Explore Our Products
                </Button>
            </Box>
        </Box>
    );
};

export default WealthManagementSection;
