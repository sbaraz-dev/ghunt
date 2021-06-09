import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { textDecoration } from '@chakra-ui/styled-system';
import React from 'react';

import { GoIssueClosed, GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";

export function Repo() {
    return(
        <Box borderWidth={1} bg='white' padding='15px' borderRadius="5px">
            <Flex mb="15px">
                <Image 
                    src='https://avatars.githubusercontent.com/u/64891838?v=4'
                    w={'35px'}
                    h={'35px'}
                    rounded="20px" 
                />
                <Box ml="10px">
                    <Heading fontSize="16px">Sam</Heading>
                    <Text fontSize="14px">View Profile</Text>
                </Box>
            </Flex>
            <Box mb="15px">
                <Box mb="10px">
                    <Heading fontSize="19px" as='a' href='https://github.com/sbaraz-dev?tab=repositories' target='_blank' color='purple.700'>githunt</Heading>
                    <Text fontSize="14px" color='gray.600'>Built by &middot; <Link fontWeight={600} href='https://github.com/sbaraz-dev' target='_blank'>Sam Baraz</Link> &middot; May 29, 2021</Text>
                    
                </Box>

                <Text fontSize="14px" color="gray.600">Hunt the most starred projects on any date on GitHub</Text>
            </Box>

            <Stack isInline>
                <Button as='a' cursor='pointer' leftIcon={<GoStar/> } variant='link' fontSize="14px" iconSpacing="2px" _hover={{textDecor: 'none'}}>2345</Button>
                <Button as='a' cursor='pointer' leftIcon={<GoRepoForked/> } variant='link' fontSize="14px" iconSpacing="2px" _hover={{textDecor: 'none'}}>34</Button>
                <Button as='a' cursor='pointer' leftIcon={<GoIssueOpened/> } variant='link' fontSize="14px" iconSpacing="2px" _hover={{textDecor: 'none'}}>34</Button>
            </Stack>

        </Box>
    )
}