import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialMedia(props) {

    const openNewTab = (url) => {
        return window.open(url, "_blank");
      };

    return (
        <Stack gap='40px' direction="row" alignItems="center" justifyContent='center'>
         
          <Button
            borderRadius="50%"
            h="50px"
            w="50px"
            backgroundColor="white"
            _hover={{ 
              backgroundColor: "#0077b6", 
              color: "white",
              bottom: '5px'
            }}
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
              bottom: '5px'
            }}
            onClick={() => openNewTab("https://www.instagram.com/loiphan_lp/")}
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </Button>

          <Button
            borderRadius="50%"
            h="50px"
            w="50px"
            backgroundColor="white"
            _hover={{
              // bgGradient: "linear(to-l, #7928CA, #FF0080)",
              bgColor: 'black',
              color: "white",
              bottom: '5px'
            }}
            onClick={() => openNewTab("https://github.com/Loiphan1003")}
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </Button>
        </Stack>
    );
}

export default SocialMedia;