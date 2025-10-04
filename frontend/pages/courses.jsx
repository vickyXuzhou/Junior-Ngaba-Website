import React, { useState } from "react";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Divider,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Courses = () => {
  const [showAllUndergradCourse, setShowAllUndergradCourse] = useState(false);
  const [showAllMasterCourse, setShowAllMasterCourse] = useState(false);

  const undergradCourses = [
    "Forest Exploitation and Legislation",
    "Forest Biology and Dendrology",
    "Industrial Wood Processing Units",
    "Industrial Wood Processing I",
    "Creative and Artistic Design of Wood",
    "Business Environment and Work Organization",
    "Workshop, Lab, and Industrial Visits I",
    "Anatomy and Properties of Wood",
    "Wood Drying and Treatment",
    "Workshop, Lab, and Industrial Visits II",
    "Research Methodology",
    "Technical English / Technical French",
    "Thematic Seminar",
    "Forest Exploitation",
    "Forest Roads",
    "Advanced Wood Science and Industry",
    "Forest Legislation",
    "Ecosystem Services",
    "Conservation, Tools and Methods for Biodiversity Assessment",
    "Innovation and Entrepreneurship",
    "Wildlife Management and Protected Areas",
    "Environmental Issues Related to Forests",
    "General Silviculture and Agroforestry",
    "Sustainable Forest Management",
    "Forest Mapping Aquaculture and Fishing",
  ];

  const graduateCourses = [
    "Forest Exploitation",
    "Cutting Process",
    "Wood Milling",
    "Sharpening Cutting Tools",
    "Wood Drying",
    "Anatomy and Properties of Wood",
    "Wood Treatment and Preservation I",
    "Grading and Trading of Wood",
    "Utilization of Wood Residues",
    "Functional Analysis of Systems",
    "Research Methodology",
    "Technical English / Technical French",
    "Chemistry of Wood Products",
    "Wood Treatment and Preservation II",
    "Wood-Derived Materials",
    "Advanced Wood Science and Industry",
    "Silviculture and Agroforestry",
    "Reduced Impact Logging",
    "Anatomy and Properties of Wood",
    "Wood Processing",
    "Wood Treatment and Preservation",
    "Research Methodology",
    "Forest Certification and Wood Traceability",
    "Forest Roads",
    "Wood Drying and Grading",
    "Community Forestry",
    "Advanced Wood Processing",
    "Valorization of Wood Residues",
    "Forest Management",
    "Tools and Methods for Biodiversity Assessment",
    "Sustainable Forest Management",
  ];

  return (
    <Box p={6} maxW="900px" mx="auto">
      <Heading size="lg" mb={6} color="teal.600">
        Courses Offered
      </Heading>

      {/* Undergraduate Section */}
      <Box mb={8}>
        <Heading size="md" mb={4} color="teal.500">
          Undergraduate
        </Heading>
        <List spacing={2} align="left">
          {(showAllUndergradCourse
            ? undergradCourses
            : undergradCourses.slice(0, 7)
          ).map((course) => (
            <ListItem key={course}>
              <ListIcon as={CheckCircleIcon} color="teal.500" />
              {course}
            </ListItem>
          ))}
        </List>
        {undergradCourses.length > 7 && (
          <Button
            mt={2}
            variant="link"
            color="teal.600"
            onClick={() => setShowAllUndergradCourse(!showAllUndergradCourse)}
          >
            {showAllUndergradCourse ? "Show less" : "Show more..."}
          </Button>
        )}
      </Box>

      <Divider />

      {/* Graduate Section */}
      <Box mt={8}>
        <Heading size="md" mb={4} color="purple.600">
          Graduate
        </Heading>
        <List spacing={2} align="left">
          {(showAllMasterCourse
            ? graduateCourses
            : graduateCourses.slice(0, 7)
          ).map((course) => (
            <ListItem key={course}>
              <ListIcon as={CheckCircleIcon} color="purple.500" />
              {course}
            </ListItem>
          ))}
        </List>
        {graduateCourses.length > 7 && (
          <Button
            mt={2}
            variant="link"
            color="purple.600"
            onClick={() => setShowAllMasterCourse(!showAllMasterCourse)}
          >
            {showAllMasterCourse ? "Show less" : "Show more..."}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Courses;
