import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex
      direction="column"
      align="center"
      //   w="300px"
      m="auto"
      p={6}
      border="1px solid"
      borderColor="gray.300"
      //   borderRadius="lg"
      boxShadow="md"
    >
      {/* Profile Image */}
      <Avatar
        size="2xl"
        name="Dr. Ngaba Mbezele Junior Yannick"
        src="images/profile.jpg"
        mb={4}
      />

      {/* Name */}
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Dr. Ngaba Mbezele Junior Yannick
      </Text>

      {/* Description */}
      <Text textAlign="center" color="gray.600">
        Title: Post-doc / Lecturer
      </Text>
      <Text textAlign="center" color="gray.600">
        Affiliated Institution: Southwest University
      </Text>
      <Text textAlign="center" color="gray.600">
        Affiliated College : College of Resources and Environment
      </Text>
      <Text textAlign="center" color="gray.600">
        Discipline: Forestry, Ecology, Environmental and Soil Science
      </Text>
      <Text textAlign="center" color="gray.600">
        English and French (Very good proficiency), Chinese (beginner).
      </Text>
    </Flex>
  );
}
