import {
  Box,
  Heading,
  VStack,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Funding = () => {
  return (
    <Box p={8}>
      {/* Page Heading */}
      <Heading size="lg" mb={6} textAlign="center" color="teal.600">
        Funding Projects Obtained or Participated
      </Heading>

      <VStack spacing={8} align="start">
        {/* Southwest University */}
        <Box align="left">
          <Text fontWeight="bold" fontSize="lg" mb={3} color="teal.500">
            Southwest University
          </Text>
          <List spacing={2} pl={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Double-First Class Initiative Program for Foreign Talents of
              Southwest University (No. cstc2021ycjhbgzxm0002)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              “Prominent Scientist Program” of Chongqing Talents (No.
              cstc2021ycjhbgzxm0020)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Strategic Priority Research Program of the Chinese Academy of
              Sciences (No. XDA28020300)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Key Foreign Cooperation Program of the Bureau of International
              Cooperation of the Chinese Academy of Sciences (No.
              177GJHZ2022020BS)
            </ListItem>
          </List>
        </Box>
        <Divider />

        {/* Northwest A&F University */}
        <Box align="left">
          <Text fontWeight="bold" fontSize="lg" mb={3} color="teal.500">
            Northwest A&amp;F University
          </Text>
          <List spacing={2} pl={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              National Natural Science Foundation of China (No. 41671295)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              National Key R. &amp; D Program of China (No. 2017YFD0200106)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              111 Project (No. B12007)
            </ListItem>
          </List>
        </Box>
        <Divider />

        {/* Fujian Agriculture and Forestry University */}
        <Box align="left">
          <Text fontWeight="bold" fontSize="lg" mb={3} color="teal.500">
            Fujian Agriculture and Forestry University (FAFU)
          </Text>
          <List spacing={2} pl={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              National Natural Science Foundation of China (No. U1805243)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              State Key Laboratory of Soil and Sustainable Agriculture and China
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Scholarship Council (CSC) University Scholarship Program
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Box>
  );
};

export default Funding;
