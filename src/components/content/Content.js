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
import imamgeLP from "../../assets/images/lp.jpg";

export default function Content() {
  // const { isOpen, onToggle } = useDisclosure()

  const openNewTab = (url) => {
    return window.open(url, "_blank");
  };

  // React.useEffect(() => {
  //   onToggle()
  // }, [])

  return (
    <Flex
      p="0 40px"
      flexDirection={{ base: "column-reverse", md: 'row' }}
      justifyContent={{ md: 'space-between'}}
      gap={{ base: '20px'}}
      w="100%"
    >
      <ScaleFade in={true} w='100%'>
        <Box
          marginTop={{ md:'10px'}}
          p="20px 30px"
          w={{ base: "100%", md: "40px", lg: "120%" }}
          h={{ base: "300px", md: "40px", lg: "400px" }}
          borderRadius="30px"
          bgGradient="linear(to top right, #f7e9e8, #e9f0aa, #99aceb)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text as='b' fontSize={{ base: '20px'}}>Hello, I’m Loi phan, a product Designer With 7 years of experience.</Text>

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
        <Box marginTop={{ base:'10px', md: '10px'}} boxSize="100%">
          <Image
            borderRadius="30px"
            h={{ base: "auto", md: "40px", lg: "400px" }}
            w={{ base: "100%", md: "40px", lg: "318%" }}
            src={imamgeLP}
            alt="LP"
          />
        </Box>
      </ScaleFade>
    </Flex>
  );
}
