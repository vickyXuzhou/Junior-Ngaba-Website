import React from "react";
import Navbar from "./navbar";
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Box py={20} px={{ base: 6, md: 20 }} minH="100vh">
        <VStack spacing={10} align="stretch">
          {/* Title */}
          <Box textAlign="center">
            <Heading
              size="2xl"
              mb={4}
              color="teal.500"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              textAlign="center"
            >
              Contact Me
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Got a project in mind, a question, or just want to say hi? I’d
              love to hear from you!
            </Text>
          </Box>

          {/* Contact Form */}
          <ContactForm />
          {/* <Box
s            p={8}
            borderRadius="2xl"
            boxShadow="lg"
            maxW={{ base: "100%", md: "700px", lg: "900px" }}
            w={{ base: "100%", md: "700px", lg: "900px" }}
            mx="auto"
          >
            <VStack spacing={6} align="stretch">
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input placeholder="Enter your name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>

              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Write your message..." rows={5} />
              </FormControl>

              <Button colorScheme="teal" size="lg">
                Send Message
              </Button>
            </VStack>
          </Box> */}

          {/* Extra contact info */}
          <Flex
            justify="center"
            align="center"
            gap={{ base: 4, md: 8 }}
            mt={10}
            wrap="wrap" // allows wrapping on small screens
            direction={{ base: "column", md: "row" }} // stack on phones, row on bigger screens
            textAlign="center"
          >
            <Link
              href="mailto:ngabajunior@gmail.com"
              color="teal.500"
              fontSize={{ base: "sm", md: "md" }}
            >
              📧 ngabajunior@gmail.com
            </Link>

            <Box color="teal.500" fontSize={{ base: "sm", md: "md" }}>
              🔗 +237677316311 / +237692894185 / +8615730769544
            </Box>

            <Box color="teal.500" fontSize={{ base: "sm", md: "md" }}>
              💻 Wechat ID: ngabajunior
            </Box>
          </Flex>
          {/* service_zh8rftr */}
          {/* template_nioa0eb */}
          {/* key = vYUy_0lj7HJH5rV3l */}
        </VStack>
      </Box>
    </div>
  );
};

export default Contact;
