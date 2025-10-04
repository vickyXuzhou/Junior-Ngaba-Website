import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, gray.900, gray.800)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <VStack spacing={6} textAlign="center" maxW="lg">
        <Heading
          as="h1"
          fontSize={{ base: "6xl", md: "9xl" }}
          fontWeight="bold"
          color="red.400"
        >
          404
        </Heading>

        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.300">
          Oops! The page you’re looking for doesn’t exist.
        </Text>

        <Button
          as={Link}
          to="/"
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          px={8}
        >
          Go Back Home
        </Button>
      </VStack>
    </Box>
  );
}
