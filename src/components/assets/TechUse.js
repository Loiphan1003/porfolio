import React from "react";
import { Flex, Box } from "@chakra-ui/react";

function TechUse({ technologies }) {

    const [tech, setTechs] = React.useState();


    React.useEffect(() => {
        if (technologies !== undefined)
            setTechs(technologies.split(','));
    }, [])


    return (
        <Flex gap={4}>

            {tech !== undefined && tech.map((i) => {

                return <Box
                    backgroundColor="gray.300"
                    p="5px"
                    w="fit-content"
                    borderRadius="5px"
                    as="b"
                    key={i}
                    color="black"
                >
                   {i}
                </Box>
            })}
            {/* <Box
                backgroundColor="gray.300"
                p="5px"
                w="fit-content"
                borderRadius="5px"
                as="b"
                color="black"
            >
                React
            </Box>

            <Box
                backgroundColor="gray.300"
                p="5px"
                w="fit-content"
                borderRadius="5px"
                as="b"
                color="black"
            >
                Redux Saga
            </Box> */}
        </Flex>
    );
}

export default TechUse;
