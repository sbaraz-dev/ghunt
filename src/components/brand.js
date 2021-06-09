import React from 'react';
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export function Brand() {
    return(
        <Flex alignItems="center">

            <Image maxWidth="140px" src='/logo.svg' objectFit="auto" />

            <Box>
                <Heading fontSize="16px">adesso_GitHub</Heading>
                <Text fontSize="14px"> Most starred projects on GitHub</Text>
            </Box>

        </Flex>
    )
}