import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Profile from "../pages/profile";
import Courses from "../pages/courses";
import PersonalData from "../pages/personalData";
import ResearchDir from "../pages/ResearchDir";
import EducationExp from "../pages/educationExp";
import Work from "../pages/work";
import Funding from "../pages/funding";
import Publications from "../pages/publications";
import { NavLink, Link as RouterLink } from "react-router-dom";
import About from "../pages/about";

function App() {
  const [isOpenn, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("PersonalData");
  const [currentPage, setCurrentPage] = useState("Profile");
  const [hoverPage, setHoverPage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pages = {
    Profile: <Profile />,
    PersonalData: <PersonalData />,
    Education: <EducationExp />,
    Courses: <Courses />,
    "Work Experience": <Work />,
    Funding: <Funding />,
    "Research Directory": <ResearchDir />,
    Publications: <Publications />,
  };

  return (
    <>
      <Box position="relative" w="100%">
        {/* 🌸 Curved Image Section */}
        <Box
          w="100%"
          h={{ base: "250px", md: "400px" }}
          position="relative"
          overflow="hidden"
          borderBottomRadius={{ base: "30%", md: "70%" }}
        >
          {/* Background Image */}
          <Image
            src="images/background.jpg"
            alt="Semi-circle image"
            objectFit="cover"
            w="100%"
            h="100%"
          />

          {/* Navbar */}
          <Flex
            as="nav"
            position="absolute"
            top="0"
            left="0"
            w="100%"
            px={{ base: 4, md: 6 }}
            py={4}
            justify="space-between"
            align="center"
            bg="rgba(0,0,0,0.3)"
            color="white"
          >
            {/* Logo */}
            <Image
              src="images/logo.jpg"
              alt="Logo"
              w={{ base: "3rem", md: "7rem" }}
              borderRadius="full"
            />

            {/* Desktop Links */}
            <Flex gap={6} display={{ base: "none", md: "flex" }}>
              {/* <Link href="#home">Home</Link> */}
              {/* <Flex gap={6} display={{ base: "none", md: "flex" }}> */}
              <Button
                as={NavLink}
                to="/"
                variant="ghost"
                color="white"
                _activeLink={{
                  color: "teal.300",
                  borderBottom: "2px solid teal",
                }}
              >
                Home
              </Button>

              <Button
                as={NavLink}
                to="/about"
                variant="ghost"
                color="white"
                _activeLink={{
                  color: "teal.300",
                  borderBottom: "2px solid teal",
                }}
              >
                About
              </Button>

              <Button
                as={NavLink}
                to="/contact"
                variant="ghost"
                color="white"
                _activeLink={{
                  color: "teal.300",
                  borderBottom: "2px solid teal",
                }}
              >
                Contact
              </Button>
              {/* </Flex> */}
            </Flex>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Toggle Menu"
              icon={isOpenn ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: "flex", md: "none" }}
              onClick={() => setIsOpen(!isOpenn)}
              bg="transparent"
              _hover={{ bg: "rgba(255,255,255,0.2)" }}
              color="white"
              zIndex="1000"
              // position="absolute"
            />
          </Flex>

          {/* Mobile Dropdown */}
          {isOpenn && (
            <Flex
              direction="column"
              position="fixed"
              // top="60px"
              // right="0"
              top="0"
              left="0"
              right="0"
              bottom="0"
              zIndex="999"
              bg="rgba(0,0,0,0.85)"
              color="white"
              w="100%"
              py={4}
              px={6}
              gap={4}
              display={{ base: "flex", md: "none" }}
            >
              {/* <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link> */}
              <Button
                as={NavLink}
                to="/"
                variant="ghost"
                color="white"
                onClick={() => setIsOpen(false)}
                _activeLink={{
                  color: "teal.300",
                  borderBottom: "2px solid teal",
                }}
              >
                Home
              </Button>
              {/* <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link> */}
              <Button
                as={NavLink}
                to="/about"
                variant="ghost"
                color="white"
                _activeLink={{
                  color: "teal.300",
                  borderBottom: "2px solid teal",
                }}
                onClick={() => setIsOpen(false)}
              >
                About
              </Button>
              {/* <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link> */}
              <Button
                as={NavLink}
                to="/contact"
                variant="ghost"
                color="white"
                _activeLink={{
                  color: "teal.300",
                  borderBottom: "2px solid teal",
                }}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Button>
            </Flex>
          )}

          {/* Centered Text */}
          <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            textAlign="center"
            direction="column"
            px={{ base: 4, md: 0 }}
          >
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
              Ngaba Junior
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }}>Welcome to my site</Text>
          </Flex>
        </Box>

        {/* Floating Container */}
        <Box
          position="relative"
          top="80%" // overlaps both image & page
          left="50%"
          transform="translateX(-50%)"
          w={{ base: "95%", md: "90%" }}
          bg="blackAlpha.600"
          borderRadius="lg"
          boxShadow="lg"
          p={6}
          textAlign="center"
          zIndex={20}
        >
          <Flex justify="center" align="center">
            {/* Floating Container */}
            <Flex
              w={{ base: "95%", md: "100%" }}
              // h={{ base: "90%", md: "80%" }}
              maxWidth="1200px"
              bg={useColorModeValue("white", "gray.800")}
              boxShadow="2xl"
              borderRadius="xl"
              overflow="hidden"
              mx="auto"
            >
              {/* Left side (Profile) */}
              <Box
                w={{ base: "100%", sm: "100%", md: "300px" }}
                display={{ base: "none", md: "block" }}
                // flex="1"
                p={6}
                borderRight={{ base: "none", md: "1px solid gray" }}
                borderBottom={{ base: "1px solid gray", md: "none" }}
              >
                {/* <Box align="left" display={{ base: "block", md: "none" }}>
                  <IconButton
                    aria-label="Open Menu"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    onClick={onOpen}
                  />
                </Box> */}
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Profile
                </Text>
                {pages.Profile}
                {/* <Box flex="1" p={6} overflowY="auto">
                  {hoverPage ? (
                    <Box opacity={0.8}>
                      <Text fontSize="sm" mb={2} color="gray.500">
                        Preview:
                      </Text>
                      {pages[hoverPage]}
                    </Box>
                  ) : (
                    pages[activePage]
                  )}
                </Box> */}
              </Box>

              {/* Right side with top nav */}
              <Flex direction="column" flex="1" flexWrap="wrap">
                {/* Top Nav */}
                <Flex
                  // spacing={4}
                  // px={6}
                  // py={4}
                  // flexWrap="wrap"
                  // borderBottom="1px solid gray"
                  // bg="gray.50"
                  // justifyContent="space-around"
                  px={6}
                  py={4}
                  borderBottom="1px solid gray"
                  bg="gray.50"
                  justifyContent={{ base: "flex-start", md: "space-around" }}
                  align="center"
                >
                  {/* Hamburger for mobile */}
                  <Box display={{ base: "block", sm: "block", md: "none" }}>
                    <IconButton
                      aria-label="Open Menu"
                      icon={<HamburgerIcon />}
                      variant="outline"
                      onClick={onOpen}
                    />
                  </Box>
                  {/* {Object.keys(pages)
                    .filter((page) => page !== "Profile") // skip Profile from top nav
                    .map((page) => (
                      <Button
                        key={page}
                        variant={activePage === page ? "solid" : "ghost"}
                        colorScheme="teal"
                        size="sm"
                        onClick={() => setActivePage(page)}
                        // bg={hoverPage === page ? "teal.50" : "blue"}
                        onMouseEnter={() => setHoverPage(page)}
                        onMouseLeave={() => setHoverPage(null)}
                      >
                        {page}
                      </Button>
                    ))} */}
                  {/* Desktop Nav */}
                  <Flex
                    display={{ base: "none", md: "flex" }}
                    flexWrap="wrap"
                    gap={2}
                  >
                    {Object.keys(pages)
                      .filter((page) => page !== "Profile")
                      .map((page) => (
                        <Button
                          key={page}
                          variant={activePage === page ? "solid" : "ghost"}
                          colorScheme="teal"
                          size="sm"
                          onClick={() => setActivePage(page)}
                          onMouseEnter={() => setHoverPage(page)}
                          onMouseLeave={() => setHoverPage(null)}
                        >
                          {page}
                        </Button>
                      ))}
                  </Flex>
                </Flex>

                {/* Drawer for mobile nav */}
                <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigation</DrawerHeader>
                    <DrawerBody>
                      <Flex direction="column" gap={2}>
                        {Object.keys(pages)
                          // .filter((page) => page !== "Profile")
                          .map((page) => (
                            <Button
                              key={page}
                              variant={currentPage === page ? "solid" : "ghost"}
                              colorScheme="teal"
                              size="sm"
                              onClick={() => {
                                setCurrentPage(page);
                                onClose();
                              }}
                            >
                              {page}
                            </Button>
                          ))}
                      </Flex>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>

                {/* Main Content (active or hover preview) */}
                <Box
                  flex="1"
                  p={6}
                  overflowY="auto"
                  display={{ base: "none", sm: "none", md: "block" }}
                >
                  {hoverPage ? (
                    <Box opacity={0.8}>
                      <Text fontSize="sm" mb={2} color="gray.500">
                        Preview:
                      </Text>
                      {pages[hoverPage]}
                    </Box>
                  ) : (
                    pages[activePage]
                  )}
                </Box>
                <Box
                  flex="1"
                  p={6}
                  overflowY="auto"
                  display={{ base: "block", sm: "block", md: "none" }}
                >
                  {hoverPage ? (
                    <Box opacity={0.8}>
                      <Text fontSize="sm" mb={2} color="gray.500">
                        Preview:
                      </Text>
                      {pages[hoverPage]}
                    </Box>
                  ) : (
                    pages[currentPage]
                  )}
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        {/* <About /> */}
      </Box>
      {/* <Box position="relative" h="120vh" /> */}
      <Box py={6}>
        <About />
      </Box>
    </>
  );
}

export default App;
