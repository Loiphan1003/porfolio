import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  ScaleFade,
} from "@chakra-ui/react";
import SocialMedia from "../assets/SocialMedia";

export default function Content({data, getref}) {
  
  return (
    <Flex
      ref={getref}
      p="0 40px"
      flexDirection={{ base: "column-reverse", md: 'row' , lg: 'row' }}
      justifyContent={{base: 'center', md: 'space-between'}}
      alignItems='center'
      gap={{ base: '20px'}}
      w="100%"
      h='100vh'
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

          <SocialMedia />
        </Box>
      </ScaleFade>
      
      {data.image !== '' && 
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
      </ScaleFade>}
    </Flex>
  );
}
