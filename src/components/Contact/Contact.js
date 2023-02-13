import React, {useState} from 'react';
import { Box, Text, Input, Textarea, Flex, Button } from '@chakra-ui/react';


function Contact({getref, data}) {

    const [dataInput, setDataInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const changeValue = (e) => {
        return setDataInput({...dataInput, [e.target.name]: e.target.value})
    }

    return (
        <Box 
            ref={getref}
            h='fit-content'
            p={{base: '20px 30px', md:'100px 200px'}}
        >
            <Text
                as='b'
                textTransform='uppercase'
                fontSize='40px'
            >
                Contact
            </Text>

            <Flex
                marginTop='40px'
                gap='20px'
                flexDirection='column'
            >
                <Input 
                    name='name' 
                    borderColor='black' 
                    placeholder='Name'  
                    onChange={(e) => changeValue(e)}
                />
                <Input 
                    name='email' 
                    borderColor='black' 
                    type='email' 
                    placeholder='Email' 
                    onChange={(e) => changeValue(e)}
                />
                <Textarea 
                    name='message'
                    placeholder='Message' 
                    borderColor='black'
                    h='200px'
                    resize='none'
                    onChange={(e) => changeValue(e)}
                />
                <Button
                    _hover={{
                        bgColor: 'black',
                        color:'white'
                    }}
                >
                    Send
                </Button>
            </Flex>
        </Box>
    );
}

export default Contact;