import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import moment from 'moment';


import { GoIssueOpened, GoRepoForked, GoStar } from "react-icons/go";

export function Repo(props) {

    const {
        viewType,
        repo
    } = props;

    const isListView = viewType != 'grid';

    return(
        <Box borderWidth={1} bg='white' padding='15px' borderRadius="5px">
            <Stack >
                {isListView && (
                    <Flex justifyContent='space-between' alignItems="center">
                        <Stack>
                            <Box mb="15px">
                                <Box mb="10px">
                                    <Heading fontSize="19px" as='a' href={repo.html_url} target='_blank' color='purple.700'>{repo.name}</Heading>
                                    <Text fontSize="14px" color='gray.600'>
                                        Built by &middot; <Link fontWeight={600} href={repo.owner.html_url} target='_blank'>
                                            {repo.owner.login}</Link> &middot; {moment(repo.created_at).format('D.MM.YYYY')}
                                    </Text>
                                </Box>

                                <Text fontSize="14px" color="gray.600">{repo.description}</Text>
                            </Box>

                            <Stack isInline>
                                <Button 
                                    as='a' cursor='pointer' leftIcon={<GoStar/> } 
                                    variant='link' fontSize="14px" iconSpacing="2px" 
                                    _hover={{textDecor: 'none'}}
                                    href={`${repo.html_url}/stargazers`} >{repo.stargazers_count}</Button>
                                <Button 
                                    as='a' cursor='pointer' 
                                    leftIcon={<GoRepoForked/> } variant='link' fontSize="14px" 
                                    iconSpacing="2px" _hover={{textDecor: 'none'}}>{repo.forks_count}</Button>
                                <Button 
                                    as='a' cursor='pointer' leftIcon={<GoIssueOpened/> } 
                                    variant='link' fontSize="14px" iconSpacing="2px" _hover={{textDecor: 'none'}}>{repo.open_issues_count}</Button>
                            </Stack>
                        </Stack>
                        <Image 
                            src={repo.owner.avatar_url}
                            w={'150px'}
                            h={'150px'}
                            rounded="80px"
                            mr="45px" 
                        />
                        {/* <Box ml="10px">
                            <Heading fontSize="16px">Sam</Heading>
                            <Text fontSize="14px">View Profile</Text>
                        </Box> */}
                    </Flex>

                )}
                {!isListView && (
                    <Stack>
                        <Flex mb="15px" alignItems="center">
                            <Image 
                                src={repo.owner.avatar_url}
                                w={'35px'}
                                h={'35px'}
                                rounded="20px" 
                            />
                            <Box ml="10px" >
                                <Heading fontSize="16px">{repo.owner.login}</Heading>
                                <Text fontSize="14px" as='a' href={repo.owner.html_url} target='_blank' color="blue.600" fontWeight={600} >View Profile</Text>
                            </Box>
                        </Flex>
                        <Box mb="15px">
                            <Box mb="10px">
                                <Heading fontSize="19px" as='a' href={repo.html_url} target='_blank' color='purple.700'>{repo.name}</Heading>
                                <Text fontSize="14px" color='gray.600'>
                                    Built by &middot; <Link fontWeight={600} href={repo.owner.html_url} target='_blank'>
                                        {repo.owner.login}</Link> &middot; {moment(repo.created_at).format('D.MM.YYYY')}
                                </Text>
                            </Box>

                            <Text fontSize="14px" color="gray.600">{repo.description}</Text>
                        </Box>
                        <Stack isInline>
                            <Button 
                                as='a' cursor='pointer' leftIcon={<GoStar/> } 
                                variant='link' fontSize="14px" iconSpacing="2px" 
                                _hover={{textDecor: 'none'}}
                                href={`${repo.html_url}/stargazers`} >{repo.stargazers_count}</Button>
                            <Button 
                                as='a' cursor='pointer' 
                                leftIcon={<GoRepoForked/> } variant='link' fontSize="14px" 
                                iconSpacing="2px" _hover={{textDecor: 'none'}}>{repo.forks_count}</Button>
                            <Button 
                                as='a' cursor='pointer' leftIcon={<GoIssueOpened/> } 
                                variant='link' fontSize="14px" iconSpacing="2px" _hover={{textDecor: 'none'}}>{repo.open_issues_count}</Button>
                        </Stack>
                    </Stack>
                )}

            </Stack>

        </Box>
    )
}