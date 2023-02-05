import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Slide, Paper } from "@mui/material";
import { Flex, Text, Box } from "@chakra-ui/react";

export default function Header() {
  const [selectMenu, setSelectMenu] = React.useState(0);

  React.useEffect(() => {}, [selectMenu]);

  return (
    <Flex padding="0 40px" h={10} justifyContent="space-between">
      <Box display="flex" dir="row" alignItems="center" gap={2} h={10}>
        <Box h={5} w={5} borderRadius="50%" bg="tomato" />
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
          onClick={() => setSelectMenu(0)}
          as={selectMenu === 0 ? "b" : "samp"}
        >
          Home
        </Text>
        <Text 
          onClick={() => setSelectMenu(1)} 
          _hover={{ cursor: "pointer" }}
          as={selectMenu === 1 ? "b" : "samp"}  
        >Projects</Text>
        <Text 
          onClick={() => setSelectMenu(2)} 
          _hover={{ cursor: "pointer" }}
          as={selectMenu === 2 ? "b" : "samp"}
        >Contact</Text>
      </Box>
    </Flex>
  );
}
