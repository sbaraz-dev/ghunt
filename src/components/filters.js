import React from 'react';
import languages from '../data/languages.json';

import { Box, Stack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Menu, MenuButton, MenuList, MenuItem, Button, Icon} from "@chakra-ui/react";
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaList, FaTable } from 'react-icons/fa';


export function Filters(props) {
    
    const { 
        viewType,
        onViewChange,
        dateJump,
        onDateJumpChange,
        language,
        onLanguageChange
    } = props;


    return(
        <Stack isInline spacing="10px">
            
            <Select 
                value={language} onChange={(e) => onLanguageChange(e.target.value)} 
                width="auto" minWidth="110px" bg="white">
                    {languages.map(language =>(
                        <option key={language.value} value={language.value}>
                            {language.label}
                        </option>
                    ))}
            </Select>

            <Menu>
                <MenuButton
                    as={Button} 
                    leftIcon={<AiOutlineCalendar />} 
                    px='15px'
                    _focus={{boxShadow: 'none'}}
                    textAlign='left'
                    justifyContent='flex-start'
                    bg='white' 
                    borderWidth={1} 
                    fontWeight={400} 
                    width="auto" 
                    minWidth="100px">
                        <Box as='span' textTransform='capitalize'>{dateJump}</Box>
                    {/* Date */}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => onDateJumpChange('day')}>Daily</MenuItem>
                    <MenuItem onClick={() => onDateJumpChange('week')}>Weekly</MenuItem>
                    <MenuItem onClick={() => onDateJumpChange('month')}>Monthly</MenuItem>
                    <MenuItem onClick={() => onDateJumpChange('year')}>Yearly</MenuItem>
                </MenuList>
            </Menu>    

            <Stack isInline spacing={0} borderWidth={1} bg="white" rounded='5px' alignItems="center" ml='10px'>
                <Button onClick={() => {onViewChange('grid')}} leftIcon={<FaTable/>} bg="transparent" fontWeight={400} bg={ viewType === 'grid' ? 'gray.200' : 'white'} >Grid</Button>
                <Button onClick={() => {onViewChange('list')}} leftIcon={<FaList/>} bg="transparent" fontWeight={400} bg={ viewType === 'list' ? 'gray.200' : 'white'} >List</Button>
            </Stack>            
            
        </Stack>
    )
}