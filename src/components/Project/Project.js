import React from 'react';
import { Flex, Stack, Box, Image, Text } from '@chakra-ui/react'

function Project({data, getref}) {
    return (
        <Box
            ref={getref}
            // margin="20px 0px"
            padding={{ base:'60px 40px', '2xl':'60px 280px'}}
            h='fit-content'
            bgGradient="linear(to-l, #02aab0, #00cdac)"
        >
            <Text
                as='b'
                fontSize='40px'
                color='white'
                textTransform='uppercase'
            >
                Projects
            </Text>
            <Flex 
                marginTop='30px'
                flexDirection='column'
                gap={20}
                color='white'
            >
                {data.map( (i) => {
                    return <Box key={i.id} display='flex' flexDirection={{ base: 'column', md: 'row' }} justifyContent={{md: 'space-between'}} w='100%' h={{base:'fit-content', md:'400px'}} gap={{base: '20px'}} >
                        <Stack
                            textAlign='left'
                            w={{base: '100%', md:'50%'}}
                        >
                            <Text  as='b' fontSize='20px'>{i.name}</Text>

                            {/* Tech */}
                            <Flex
                                gap={4}
                            >
                                <Box
                                    backgroundColor='gray.300'
                                    p='5px'
                                    w='fit-content'
                                    borderRadius='5px'
                                    as='b'
                                    color='black'
                                >
                                    React
                                </Box>

                                <Box
                                    backgroundColor='gray.300'
                                    p='5px'
                                    w='fit-content'
                                    borderRadius='5px'
                                    as='b'
                                    color='black'
                                >
                                    Redux Saga
                                </Box>
                            </Flex>

                            {/* Colaborators */}
                            <Text>
                                <Text as='b'>Collaborators: </Text>Duy, Phúc
                            </Text>

                            {/* Discription */}
                            <Text
                                w={{base:'100%', md:'90%'}}
                            >
                                Trang web xây dựng nhằm mục đích có thể chạy code trực tuyến, và mỗi người có thể giải bài tập một cách trực quan hơn
                            </Text>

                        </Stack>
                        <Image src={i.image} alt='image demo' w={{base: '100%', md:'50%'}} borderRadius='20px' />
                    </Box>    
                })}
                
            </Flex>
        </Box>
    );
}

export default Project;