import { Text } from '@chakra-ui/layout';
import moment from 'moment';
import React from 'react';

export function GroupTitle({ startDate, endDate }) {
    if (!startDate || !endDate) {
        return null;
    }

    const startMoment = moment(startDate);
    const endMoment = moment(endDate);

    return (
        <Text fontSize="18px" fontWeight="650" >
            { startMoment.fromNow() }{" "} 
            <Text 
                as='span' 
                fontSize="16px" 
                fontWeight="400" 
                ml="5px"
            >
                { startMoment.format("D MMMM, YYYY")} - { endMoment.format("D MMMM, YYYY") }
            </Text>
        </Text>
    )
}