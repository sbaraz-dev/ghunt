import { Text } from '@chakra-ui/layout';
import React from 'react';

export function GroupTitle() {
    return (
        <Text fontSize="18px" fontWeight="650" >
            This week <Text as='span' fontSize="16px" fontWeight="400" ml="5px">June 6, 2021 - July 23, 2021</Text>
        </Text>
    )
}