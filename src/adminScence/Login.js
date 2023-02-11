import React from 'react';
import { Flex, Box, Text, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Login(props) {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setErrror] = React.useState('false');

    const navigate = useNavigate();

    async function login(userName, password) {
        console.log(`${userName} / ${password}`);
        await axios.post('https://porfolio-api-six.vercel.app/account',{
            "username": userName,
            "password": password,
            
        },{
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then((response) =>{
           
            if(response.data.message === 'Đăng nhập thành công'){
                setUserName('');
                setPassword('');
                sessionStorage.setItem("porfolioAdmin", "loiphan1003")
                return navigate('/admin/dashboard');
            }
            return setErrror('true');
        })
    }

    return (
        <Flex justifyContent='center' alignItems='center' w='100%' h='100vh'>
            <Box  
                w='400px'
                h='fit-content'
                bgGradient="linear(to top right, #f7e9e8, #e9f0aa, #99aceb)"
                borderRadius='20px'
                padding='10px 30px'
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap='20px'
            >
                <Text as='b' fontSize='30px' >Đăng nhập</Text>
                <Input placeholder='Nhập tài khoản' onChange={(e) => setUserName(e.target.value)} />
                <Input placeholder='Nhập mật khẩu' type='password' onChange={(e) => setPassword(e.target.value)} />

                {error === 'true' && <Text color='red' >Sai tài khoản hoặc mật khẩu</Text> }

                <Button 
                    w='100%' 
                    _hover={{
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                    onClick={() => login(userName, password)}
                >
                    Đăng nhập
                </Button>
            </Box>
        </Flex>
    );
}

export default Login;