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
      p={{ base:"20px 40px",'2xl': "0px 280px" }}
      flexDirection={{ base: "column-reverse", md: 'column-reverse' , lg: 'row' }}
      justifyContent={{base: 'flex-end',md: 'flex-end', lg: 'space-between'}}
      alignItems='center'
      gap={{ base: '20px', md: '20px'}}
      w="100%"
      h={{base:'100vh', md:'fit-content', lg:'100vh'}}
    >
      {data.image !== '' && <>

      <ScaleFade in={true}>
        <Box
          // marginTop={{ md:'10px'}}
          p={{base: "30px 30px", md:"20px 30px"}}
          w={{ base: "100%", md: "100%", lg: "50rem" }}
          h={{ base: "fit-content", md: "400px", lg: "400px" }}
          borderRadius="30px"
          bgGradient="linear(to top right, #f7e9e8, #e9f0aa, #99aceb)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap='40px'
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
      
      <ScaleFade initialScale={0.9} in={true}>
        <Box 
          // boxSize={{base:'100%', md: '100%'}} 
          h='fit-content'
          w='100%'
        >
          <Image
            borderRadius="30px"
            h={{ base: "auto", md: "100%", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "318%" }}
            src={data.image}
            alt="LP"
          />
        </Box>
      </ScaleFade>
      </>}
    </Flex>
  );
}
