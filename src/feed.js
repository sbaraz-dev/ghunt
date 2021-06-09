import React from 'react';
import { Header } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';

import { Box, Flex, SimpleGrid} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { Repo } from './components/repo';



export function Feed() {
    return(
        <Box maxWidth='1200px' mx='auto' padding="25px">
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