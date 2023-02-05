import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Contact(props) {
  const openNewTab = (url) => {
    return window.open(url, "_blank");
  };

  return (
    <Box paddingLeft="40px" paddingRight="40px" paddingBottom="20px">
      <Flex
        flexDirection="column"
        justifyContent='space-around'
        w="100%"
        h="200px"
        borderRadius="20px"
        bgGradient="linear(to top right, #f7e9e8, #e9f0aa, #99aceb)"
      >
        <Text fontSize='4xl' as='b'>Want to work together ?</Text>
        <Stack direction="row" alignItems="center" justifyContent='center'>
          <Button
            _hover={{
                backgroundColor: 'black',
                color: 'white'
            }}
        >
            Contact me
        </Button>

          <Button
            borderRadius="50%"
            h="50px"
            w="50px"
            backgroundColor="white"
            _hover={{ backgroundColor: "#0077b6", color: "white" }}
            onClick={() =>
              openNewTab(
                "https://www.facebook.com/profile.php?id=100004241627166"
              )
            }
          >
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </Button>

          <Button
            borderRadius="50%"
            h="50px"
            w="50px"
            backgroundColor="white"
            _hover={{
              bgGradient: "linear(to-l, #7928CA, #FF0080)",
              color: "white",
            }}
            onClick={() => openNewTab("https://www.instagram.com/loiphan_lp/")}
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Contact;
