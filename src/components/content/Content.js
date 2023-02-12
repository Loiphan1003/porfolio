import React from "react";
// import styles from './Content.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  Button,
  ScaleFade,
} from "@chakra-ui/react";

export default function Content({data, getref}) {
  // const { isOpen, onToggle } = useDisclosure()

  const openNewTab = (url) => {
    return window.open(url, "_blank");
  };

  // React.useEffect(() => {
  //   onToggle()
  // }, [])

  return (
    <Flex
      ref={getref}
      p="0 40px"
      flexDirection={{ base: "column-reverse", md: 'row' , lg: 'row' }}
      justifyContent={{ md: 'space-between'}}
      gap={{ base: '20px'}}
      w="100%"
    >

      <ScaleFade in={true} w='100%'>
        <Box
          // marginTop={{ md:'10px'}}
          p="20px 30px"
          w={{ base: "100%", md: "420px", lg: "50rem" }}
          h={{ base: "300px", md: "400px", lg: "400px" }}
          borderRadius="30px"
          bgGradient="linear(to top right, #f7e9e8, #e9f0aa, #99aceb)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Text as='b' fontSize={{ base: '30px', md: '35px'}}>Hello, I’m Loi phan, a web developer.</Text>
            <Text
              marginTop='20px'
              fontSize='20px'
            >I'm very interested in creating websites. </Text>
          </Box>
          <Button 
            backgroundColor='black' 
            color='white' 
            borderRadius='30px' 
            h='50px'
            _hover={{
              backgroundColor: 'blackAlpha.600'
            }}
            display={{ base: 'block', md: 'none'}}
            >
              Contact me
            </Button>

          <Stack spacing={{ base: '20', md:'5'}} direction="row" justifyContent={{ base: 'center'}}>
            <Button
              borderRadius="50%"
              h={{base:'60px', md:"50px"}}
              w={{base:'60px', md:"50px"}}
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
              h={{base:'60px', md:"50px"}}
              w={{base:'60px', md:"50px"}}
              backgroundColor="white"
              _hover={{
                bgGradient: "linear(to-l, #7928CA, #FF0080)",
                color: "white",
              }}
              onClick={() =>
                openNewTab("https://www.instagram.com/loiphan_lp/")
              }
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Button>

          </Stack>
        </Box>
      </ScaleFade>

      <ScaleFade in={true}>
        <Box boxSize='100%' >
          <Image
            borderRadius="30px"
            h={{ base: "auto", md: "100%", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "318%" }}
            src={data.image}
            alt="LP"
          />
        </Box>
      </ScaleFade>
    </Flex>
  );
}
