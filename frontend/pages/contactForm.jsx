import { useRef } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

const ContactForm = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zh8rftr", // 🔹 Replace with your Service ID
        "template_nioa0eb", // 🔹 Replace with your Template ID
        form.current,
        "vYUy_0lj7HJH5rV3l" // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Message sent!",
            description: "I'll get back to you soon 💌",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error",
            description: "Something went wrong 😥",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box
      maxW={{ base: "100%", md: "700px", lg: "900px" }}
      w={{ base: "100%", md: "700px", lg: "900px" }}
      mx="auto"
      p={6}
    >
      <form ref={form} onSubmit={sendEmail}>
        <VStack spacing={4}>
          <Input type="text" name="name" placeholder="Your Name" isRequired />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            isRequired
          />
          <Textarea
            name="title"
            placeholder="Your Message"
            rows={6}
            isRequired
          />
          <Button type="submit" colorScheme="teal" w="full">
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
