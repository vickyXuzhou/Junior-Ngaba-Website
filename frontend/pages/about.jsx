import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Image,
  Button,
  SimpleGrid,
  Link,
  Divider,
} from "@chakra-ui/react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <Container maxW="6xl" py={10}>
        {/* Header Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={{ base: 6, md: 8 }}
          mb={12}
        >
          {/* Profile Photo */}
          <Image
            src="images/seated.jpg"
            alt="Profile Photo"
            boxSize={{ base: "200px", sm: "250px", md: "300px", lg: "350px" }} //  responsive sizing
            objectFit="cover"
            flexShrink={0} //  prevents image from shrinking too much
            borderRadius="xl"
            objectPosition="50% 25%" //  face positioning
            shadow="md"
            flex="1"
          />

          {/* Text Section */}
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            {/*  center on mobile, left on desktop */}
            <Box
              size="lg"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              mb={0}
            >
              Hi, I'm Dr Ngaba Junior
              <Box
                height="4px"
                width="70%" // you can adjust (or "full" for full width underline)
                bg="teal.600"
                borderRadius="md"
                // margin="0 auto"
                margin={{ base: "1rem auto 2rem", md: "2rem 0 1rem 0" }}
                align={{ base: "right", md: "right" }}
                // gap="2rem"
                // pt={9}
              />
            </Box>
            <Text
              mt={3}
              fontSize={{ base: "md", sm: "lg" }}
              color="gray.600"
              lineHeight="tall"
            >
              I am a specialist in forest and environmental sciences, soil
              sciences, forestry and wildlife management. I have worked
              extensively on topics such as plant nutrition, land use change,
              carbon sequestration and more. I have published several papers in
              peer-reviewed journals and presented my work at international
              conferences.
            </Text>
          </Box>
        </Flex>

        <Divider mb={10} />

        {/* Casual Photo Section */}
        <Flex
          direction={{ base: "column", md: "row-reverse" }}
          align="center"
          gap={8}
          mb={12}
        >
          <Image
            src="images/casual.jpg"
            alt="Casual Lifestyle"
            boxSize={{ base: "250px", md: "300px" }}
            borderRadius="xl"
            objectFit="cover"
            objectPosition="center 65%" //  shows the top part instead of center
            shadow="md"
            flex="1"
          />

          {/* <Box
            w={{ base: "250px", md: "300px" }}
            h={{ base: "250px", md: "300px" }}
            borderRadius="xl"
            shadow="md"
            flex="1"
            bgImage="url('/images/casual.jpg')"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
          /> */}

          <Box flex="1">
            <Heading
              size="md"
              mb={3}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              fontWeight="extrabold"
            >
              Outside the Lab
              <Box
                height="4px"
                width="40%" // you can adjust (or "full" for full width underline)
                bg="teal.600"
                borderRadius="md"
                // margin="0 auto"
                margin={{ base: "1rem 0 2rem", md: "2rem 0 1rem 0" }}
                align={{ base: "right", md: "right" }}
                // gap="2rem"
                // pt={9}
              />
            </Heading>
            <Text color="gray.600">
              When I’m not doing research, you’ll find me exploring new
              cultures, enjoying nature, and mentoring young scientists. This
              balance helps me stay grounded and creative in my professional
              journey.
            </Text>
          </Box>
        </Flex>

        <Divider mb={10} />

        {/* Biography */}
        <Box mb={12} align="center">
          <Heading
            size="md"
            mb={4}
            fontWeight="extrabold"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            My primary Research Interest
            <Box
              height="4px"
              width="40%" // you can adjust (or "full" for full width underline)
              bg="teal.600"
              borderRadius="md"
              // margin="0 auto"
              margin={{ base: "1rem auto 2rem", md: "2rem 0 1rem 0" }} // center on mobile, left on desktop
              align={{ base: "right", md: "right" }}
              // gap="2rem"
              // pt={9}
            />
          </Heading>
          <VStack align="start" spacing={4} margin="0 auto" maxW="700px">
            <Text>
              Enviromental science, soil science, forestry and wildlife
              management
            </Text>
            <Text>
              Worked extensively on topics such as plant nutrition,land-use
              change, carbon sequestration, enviromental pollution and more
            </Text>
            <Text>
              Published papers in peer reviewed journals and presented at
              international comferences
            </Text>
          </VStack>
        </Box>

        <Divider mb={10} />

        {/* Quick Highlights */}
        <Box mb={12}>
          <Heading
            size="md"
            mb={6}
            fontWeight="bold"
            color="teal.600"
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          >
            Quick Highlights
            <Box
              height="4px"
              width="20%" // you can adjust (or "full" for full width underline)
              bg="teal.600"
              borderRadius="md"
              // margin="0 auto"
              margin={{ base: "1rem 0 2rem", md: "2rem 0 1rem 0" }} // center on mobile, left on desktop
              align={{ base: "right", md: "right" }}
              // gap="2rem"
              // pt={9}
            />
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              align="center"
            >
              <Heading fontSize="xl">Research Gate</Heading>
              <Link
                href="https://www.researchgate.net/profile/Junior-Ngaba"
                isExternal
                color="blue.500"
                align="center"
                textDecoration="none" // removes underline
                _hover={{ color: "teal.600", textDecoration: "none" }}
              >
                ResearchGate
              </Link>
            </Box>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              align="center"
            >
              <Heading fontSize="xl">Google Scholar</Heading>
              <Link
                href="https://scholar.google.com/citations?hl=en&user=x8UfPmkAAAAJ&view_op=list_works&sortby=pubdate"
                isExternal
                color="blue.500"
                textDecoration="none" // removes underline
                _hover={{ color: "teal.600", textDecoration: "none" }}
              >
                Google Scholar
              </Link>
            </Box>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              align="center"
            >
              <Heading fontSize="xl">Orcid</Heading>
              <Link
                href="https://orcid.org/0000-0001-7823-8156"
                isExternal
                color="blue.500"
                textDecoration="none" // removes underline
                _hover={{ color: "teal.600", textDecoration: "none" }}
              >
                ORCID
              </Link>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider mb={10} />

        {/* Call-to-Action */}
        <VStack spacing={4} textAlign="center">
          <Heading size="md">Let’s Connect</Heading>
          <Text>
            Always open to collaborations, discussions, and research ideas. Feel
            free to reach out.
          </Text>
          <Button
            as={NavLink}
            to="/contact"
            variant="ghost"
            color="white"
            bg="teal.500"
            _hover={{ bg: "teal.600" }}
          >
            Contact Me
          </Button>
        </VStack>
      </Container>
    </>
  );
}
