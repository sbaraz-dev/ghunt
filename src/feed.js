import React from 'react';
import { Header } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Brand } from './components/brand';


import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa';
import { Repo } from './components/repo';



export function Feed() {
    return(
        <Box maxWidth='1200px' mx='auto' padding="10px">
            <Header/>

            <Flex alignItems="center" justifyContent="space-between" py="20px">
                <GroupTitle />
                <Filters/>

            </Flex>

            <SimpleGrid columns={3} spacing='15px'>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
                <Repo/>
            </SimpleGrid>

            <Flex alignItems="center" justifyContent="center" mt="20px" mb="20px">
                <Button colorScheme="blue">Load next group</Button>
            </Flex>

        </Box>
    )
}