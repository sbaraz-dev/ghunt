import React, { useState } from 'react';
import languages from '../data/languages.json';

import { Stack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaList, FaTable } from 'react-icons/fa';


export function Filters() {

    const [viewType, setViewType] = useState('list');

    return(
        <Stack isInline spacing="10px">
            
            <Select width="auto" minWidth="110px" bg="white">
                {languages.map(language =>(
                    <option value={language.value}>{language.label}</option>
                ))}
            </Select>
            <Menu>
                <MenuButton as={Button} leftIcon={<AiOutlineCalendar />} bg='white' borderWidth={1} fontWeight={400} width="auto" minWidth="110px">
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>    

            <Stack isInline spacing={0} borderWidth={1} bg="white" rounded='5px' alignItems="center" ml='10px'>
                <Button onClick={() => {setViewType('grid')}} leftIcon={<FaTable/>} bg="transparent" fontWeight={400} bg={ viewType === 'grid' ? 'gray.200' : 'white'} >Grid</Button>
                <Button onClick={() => {setViewType('list')}} leftIcon={<FaList/>} bg="transparent" fontWeight={400} bg={ viewType === 'list' ? 'gray.200' : 'white'} >List</Button>
            </Stack>            
            
        </Stack>
    )
}