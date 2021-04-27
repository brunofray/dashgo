import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Fray</Text>
        <Text color="gray.300" fontSize="small">
          brunofray@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Bruno Fray" src="https://github.com/brunofray.png"/>
    </Flex>
  );
}