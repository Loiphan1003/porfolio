import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../assets/SocialMedia";

function Contact() {

  function scrollTop() {
    return document.documentElement.scrollTop = 0;
  }

  return (
    <Box>
      <Flex
        flexDirection="column"
        justifyContent='center'
        alignItems='center'
        w="100%"
        h="200px"
        gap='20px'
        backgroundColor='#333'
      >
        <Text
          w='fit-content'
          _hover={{
            cursor: 'pointer',
            color: "white",
          }}
          onClick={() => scrollTop()}
        >
          <FontAwesomeIcon 
            icon={faCaretUp} 
            size='2x' 
            color="white"
          />
        </Text>

        <SocialMedia />
      </Flex>
    </Box>
  );
}

export default Contact;
