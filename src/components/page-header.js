import React from 'react';

import { Flex, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa';

import { Brand } from './brand.js';

export function Header() {
    return (
        <Flex justifyContent='space-between' alignItems="center" >

            <Brand />

            <Stack isInline spacing="10px">
                <Button leftIcon={<FaGithub/>}> View Source</Button>
                <Button leftIcon={<FaChrome/>} colorScheme="red" >Use Extension</Button>
                <Button leftIcon={<FaTwitter/>} colorScheme="twitter" >Tweet</Button>
            </Stack>

        </Flex>
    )
}