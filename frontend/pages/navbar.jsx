import { Box, Button, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex
        as="nav"
        position="relative"
        top="0"
        left="0"
        w="100%"
        px={{ base: 4, md: 6 }}
        py={4}
        justify="space-between"
        align="center"
        bg="rgba(0,0,0,0.3)"
        color="white"
        // pt="10rem"
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
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
          bg="transparent"
          color="white"
          _hover={{ bg: "rgba(255,255,255,0.2)" }}
        />
      </Flex>

      {/* Mobile Dropdown */}
      {isOpen && (
        <Flex
          direction="column"
          position="absolute"
          top="60px"
          right="0"
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
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
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
    </>
  );
};

export default Navbar;
