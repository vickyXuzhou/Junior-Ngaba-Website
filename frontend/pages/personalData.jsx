import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Divider,
  Flex,
} from "@chakra-ui/react";

const PersonalData = () => {
  return (
    <Flex
      p={6}
      maxW="800px"
      //   mx="auto"
      //   justifyContent="space around"
      flexDirection="column"
    >
      <Heading size="lg" mb={6} color="teal.600">
        Personal Information
      </Heading>

      <Flex
        // align="start"
        spacing={4}
        justifyContent="space around"
        flexDirection="column"
        alignItems="flex-start"
      >
        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          Professional Position:
        </Text>
        <Text>Post-doc / Lecturer</Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          Graduated from:
        </Text>
        <Text>Fujian Agriculture and Forestry University</Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          Highest Degree:
        </Text>
        <Text>Ph.D.</Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          Department:
        </Text>
        <Text align="left">
          College of Natural Resources and Environment / College of Forestry /
          College of Ecology / College of Wildlife management / College of Wood
          Engineering
        </Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          Contact Number:
        </Text>
        <Text>+237677316311 / +237692894185 / +8615730769544</Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          Email:
        </Text>
        <Text>ngabajunior@yahoo.fr / ngabajunior@gmail.com</Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          WeChat ID:
        </Text>
        <Text>ngabajunior</Text>
        {/* </Box> */}

        {/* <Box> */}
        <Text fontWeight="bold" color="teal.500">
          WhatsApp:
        </Text>
        <Text>+237677316311 / +237692894185 / +8615730769544</Text>
        {/* </Box> */}

        <Divider />

        <Box>
          <Text fontWeight="bold" color="teal.500">
            Research Profiles:
          </Text>
          <VStack align="start" spacing={2} mt={2}>
            <Link
              href="https://www.researchgate.net/profile/Junior-Ngaba"
              isExternal
              color="blue.500"
            >
              ResearchGate
            </Link>
            <Link
              href="https://scholar.google.com/citations?hl=en&user=x8UfPmkAAAAJ&view_op=list_works&sortby=pubdate"
              isExternal
              color="blue.500"
            >
              Google Scholar
            </Link>
            <Link
              href="https://orcid.org/0000-0001-7823-8156"
              isExternal
              color="blue.500"
            >
              ORCID
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PersonalData;
