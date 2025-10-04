import React from "react";
import { Box, Heading, Text, VStack, Divider } from "@chakra-ui/react";

const Work = () => {
  return (
    <Box p={8}>
      {/* Page Heading */}
      <Heading size="lg" mb={6} textAlign="center" color="teal.600">
        Work Experience
      </Heading>

      {/* Work Experience Items */}
      <VStack spacing={6} align="start">
        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            February 2023 – Present: Postdoctorate Researcher
          </Text>
          <Text>Southwest University (Chongqing, China)</Text>
          <Text>College of Resources and Environment</Text>
        </Box>
        <Divider />

        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            August 2020 – August 2022: Postdoctorate Researcher
          </Text>
          <Text>Northwest A&amp;F University (Yangling, China)</Text>
          <Text>College of Natural Resources and Environment</Text>
        </Box>
        <Divider />

        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            January 2019 – June 2020: Research Assistant
          </Text>
          <Text>
            PAFC-Cameroon (Pan African Forest Certification, Cameroon)
          </Text>
          <Text>Department of Wildlife Animal Science</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Work;
