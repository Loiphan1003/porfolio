import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// import { Slide, Paper } from "@mui/material";
import { Flex, Text, Box } from "@chakra-ui/react";

export default function Header({select, isSelect}) {

  return (
    <Flex padding={{ base:"0 40px", '2xl': "0 280px"}} h={10} justifyContent="space-between">
      <Box display="flex" dir="row" alignItems="center" gap={2} h={10}>
        <Box h={5} w={5} borderRadius="50%" bg="#24f66e" />
        <Text as="b">LP</Text>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        dir="row"
        gap={20}
        alignItems="center"
      >
        <Text
          _hover={{ cursor: "pointer" }}
          onClick={() => select(0)}
          as={isSelect === 0 ? "b" : "samp"}
        >
          Home
        </Text>
        <Text 
          onClick={() => select(1)} 
          _hover={{ cursor: "pointer" }}
          as={isSelect === 1 ? "b" : "samp"}  
        >Projects</Text>
        <Text 
          onClick={() => select(2)} 
          _hover={{ cursor: "pointer" }}
          as={isSelect === 2 ? "b" : "samp"}
        >Contact</Text>
      </Box>
    </Flex>
  );
}
