import React from "react";
import { Box, Text, Input, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import styles from './style.module.css';


function Contact({ getref, data }) {
    //   const [dataInput, setDataInput] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });

    const form = React.useRef();
    const toast = useToast();

    //   const changeValue = (e) => {
    //     return setDataInput({ ...dataInput, [e.target.name]: e.target.value });
    //   };

    const handlSendMail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_e8d6u1m",
                "template_cvvglhd",
                form.current,
                "Flxngm3UMXIwC82Dq"
            )
            .then(
                (result) => {
                    if (result.text === 'OK') {
                        return toast({
                            title: 'Send email success.',
                            description: "Your message was sent to me",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );

    };

    return (
        <Box
            ref={getref}
            h="fit-content"
            p={{ base: "20px 30px", md: "10px 200px",'2xl': "10px 500px" }}
        >
            <Text
                as='b'
                textTransform='uppercase'
                fontSize='40px'
            >
                Contact
            </Text>


            <form ref={form} name="formContact" className={styles.form} onSubmit={handlSendMail}>
                {/* <label >Name</label> */}
                <input className={styles.input} required type="text" name="user_name" placeholder="Name" />
                {/* <label>Email</label> */}
                <input className={styles.input} required type="email" name="user_email" placeholder="Email" />
                {/* <label>Message</label> */}
                <textarea
                    required
                    name="message"
                    resize="none"
                    placeholder="Message"
                />
                <Input
                    type="submit"
                    value="Send"
                    marginTop="20px"
                    backgroundColor="black"
                    color="white"
                    _hover={{
                        cursor: "pointer",
                        opacity: "0.5",
                    }}
                    fontWeight="bold"
                />
            </form>
        </Box>
    );
}

export default Contact;
