import React from 'react';
import { Grid, GridItem, Box, Image, Text } from '@chakra-ui/react'
import Room from '../../assets/images/room.png'
import lp from '../../assets/images/lp.jpg'

function Project({data}) {
    return (
        <Box
            margin="20px 0px"
            padding='0 40px'
            h='fit-content'
        >
            <Grid  
                templateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)'}}
                gap={6}
            >
                {data.map( (i) => {
                    return <GridItem key={i.id} w='100%' h={{base:'300px', md:'400px'}} position='relative'>
                        <Text position='absolute' as='b' top='20px' left='20px' >{i.name}</Text>
                        <Image src={i.image} alt='image demo' w='100%' h='100%' borderRadius='20px' />
                    </GridItem>    
                })}
                
            </Grid>
        </Box>
    );
}

export default Project;