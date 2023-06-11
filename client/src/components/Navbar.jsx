import { Box, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAccount } from '../context/AccountContext'


const Navbar = () => {

    const {person} = useAccount();

  return (
    <>
      <HStack h={"20"} borderBottom={"2px solid red"} >
        <Box ml={"5"} fontSize={"2rem"}  >
        {
            person ? person.name : ""
        }
        </Box>
        <Box></Box>
      </HStack>
    </>
  )
}

export default Navbar
