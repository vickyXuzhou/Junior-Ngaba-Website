import React from "react";
import { VStack, Box, Text, Heading } from "@chakra-ui/react";

const EducationExp = () => {
  return (
    <Box p={8}>
      <Heading size="lg" mb={6} textAlign="center" color="teal.600">
        Education Experience
      </Heading>

      <VStack spacing={6} align="start">
        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            Aug 2016 - Jul 2020: PhD (Major: Forest Management)
          </Text>
          <Text>Fujian Agriculture and Forestry University (FAFU)</Text>
          <Text>College of Forestry • Fuzhou • China</Text>
        </Box>

        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            Aug 2015 - Jul 2016: Master of Science (Major: Environmental
            Sciences - Public Audience)
          </Text>
          <Text>University of Dschang • College of Environment</Text>
          <Text>Dschang • Cameroon</Text>
        </Box>

        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            Oct 2012 - Jul 2015: Engineer in Water, Forests, and Wildlife
            Management (Major: Wildlife Management and Protected Area
            Management)
          </Text>
          <Text>
            University of Dschang • Faculty of Agronomy and Agricultural
            Sciences (FASA)
          </Text>
          <Text>Dschang • Cameroon</Text>
        </Box>

        <Box align="left">
          <Text fontWeight="bold" color="teal.500">
            Oct 2009 - Jul 2012: Works Engineer in Water, Forests, and Wildlife
            Management (Major: Forest Exploitation and Wood Transformation)
          </Text>
          <Text>
            University of Dschang • Faculty of Agronomy and Agricultural
            Sciences (FMBEE)
          </Text>
          <Text>Ebolowa • Cameroon</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default EducationExp;
