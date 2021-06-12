import React from 'react';
import { useEffect, useState } from "react";
import { Header } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';

import { Box, Flex, SimpleGrid} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { Repo } from './components/repo';
import moment from 'moment';
import useFetch from 'use-http/dist/esm';
import { PageLoader } from './components/page-loader';


function transformFilters({language, startDate, endDate}) {
    const transformedFilters = {};

    const languageQuery = language ? `language:${language} ` : '';
    const dateQuery = `created:${startDate}..${endDate}`;

    transformedFilters.q = languageQuery + dateQuery;
    transformedFilters.sort = 'stars';
    transformedFilters.order = 'desc';

    return transformedFilters;
}

export function Feed() {
    const { loading, error, get } = useFetch('https://api.github.com');

    const [viewType, setViewType] = useState('grid');
    const [dateJump, setDateJump] = useState('day');
    const [language, setLanguage] = useState('');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(moment().subtract(1, 'day').format());

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        setRepositories([]);
        const endDate = moment().subtract(1, 'day').format();
        const startDate = moment(endDate).subtract(1, dateJump).format();

        setEndDate(endDate);
        setStartDate(startDate);

    }, [dateJump, language])

    useEffect(() => {
        if (!startDate) {
            return;
        }

        const filters = transformFilters( { language, startDate, endDate } ); 
        const filtersQuery = new URLSearchParams(filters).toString();

        get(`/search/repositories?${filtersQuery}`).then((res) => {
            setRepositories([
                ...repositories,
                {
                    startDate,
                    endDate,
                    items: res.items
                }
            ])
            console.log(res)
        })

    }, [startDate])


    return(
        <Box maxWidth='1200px' mx='auto' padding="10px">
            <Header/>
            { repositories.length === 0 && loading && <PageLoader/> }   

            <Flex alignItems="center" justifyContent="space-between" py="20px" >
                <GroupTitle startDate={repositories?.[0]?.startDate} endDate={repositories?.[0]?.endDate} />
                <Filters
                    viewType={viewType}
                    onViewChange={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />

            </Flex>

            {repositories.map((repoGroup, counter) => {
                const groupTitle = counter > 0 && (
                    <GroupTitle 
                            startDate={repoGroup.startDate} 
                            endDate={repoGroup.endDate} 
                    />
                )

                return (
                    <Box py="20px">
                        { groupTitle }
                        <SimpleGrid columns={viewType === 'grid' ? 3 : 1} spacing='15px'>
                            { repoGroup.items.map( repo => <Repo viewType={viewType} repo={repo} /> ) }
                        </SimpleGrid>
                    </Box>
                )
            })}

            <Flex alignItems="center" justifyContent="center" mt="20px" mb="20px">
                <Button isLoading={loading} onClick={() => {
                    setEndDate(startDate);
                    setStartDate(moment(startDate).subtract(1, dateJump).format())
                }} colorScheme="blue">Load next group</Button>
            </Flex>

        </Box>
    )
}