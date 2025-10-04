import React from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  VStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const ResearchDir = () => {
  const directions = [
    "Environmental, forestry, and ecology sciences",
    "C & N cycles and fluxes in agroforestry ecosystems",
    "Soil biochemistry and soil-plant relations",
    "Greenhouse gas emissions",
    "Microplastics impact on humans and the environment",
    "Pollutants bioremediation",
    "Soil respiration",
    "Land use change",
    "C & N sequestration",
    "Organic, inorganic, and biochar amendment",
    "Wildlife management",
  ];

  return (
    <Box p={6} maxW="800px" mx="auto">
      <Heading size="lg" mb={6} textAlign="center" color="teal.600">
        Research Directions
      </Heading>

      {/* ✅ Wrap ListItems inside List */}
      <List spacing={3} align="left">
        {directions.map((item) => (
          <ListItem
            key={item}
            p={3}
            borderWidth="1px"
            borderRadius="md"
            _hover={{ bg: "gray.50" }}
          >
            <ListIcon as={StarIcon} color="teal.400" />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ResearchDir;
