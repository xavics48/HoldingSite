import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Grid,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavbarMenu = ({ label, leftItems = [], rightItems = [] }) => {
  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Button variant="ghost" rightIcon={<ChevronDownIcon />}>
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        boxShadow="lg"
        border="1px solid #e2e8f0"
        bg="white"
        _hover={{ boxShadow: 'xl' }}
      >
        <PopoverBody p="4">
          <Grid templateColumns={rightItems.length > 0 ? '1fr 1fr' : '1fr'} gap={6}>
            {/* Left Column */}
            {leftItems.length > 0 && (
              <Flex direction="column" gap={4}>
                {leftItems.map((item, index) => (
                  <Flex key={index} direction="column">
                    <Text
                      as="a"
                      href={item.link}
                      fontWeight="bold"
                      fontSize="md"
                      _hover={{ color: 'orange.500' }}
                    >
                      {item.label}
                    </Text>
                    {item.description && (
                      <Text fontSize="sm" color="gray.600">
                        {item.description}
                      </Text>
                    )}
                  </Flex>
                ))}
              </Flex>
            )}

            {/* Right Column */}
            {rightItems.length > 0 && (
              <Flex direction="column" gap={4}>
                {rightItems.map((item, index) => (
                  <Text
                    key={index}
                    as="a"
                    href={item.link}
                    fontWeight="bold"
                    fontSize="md"
                    _hover={{ color: 'orange.500' }}
                  >
                    {item.label}
                  </Text>
                ))}
              </Flex>
            )}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default NavbarMenu;
