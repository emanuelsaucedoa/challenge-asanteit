import React from 'react'
import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import fondoheader from '../../Assets/fondo-header.png'

export default function Header() {

  const [isLargerThan450] = useMediaQuery('(min-width: 450px)')

  return (
    <Box>
      {isLargerThan450?<Flex width='100%' height='208px' position='relative'>
      <Image width='100%' src={fondoheader} alt='fondo-header'/>
      <Text width='210px' height='73px' fontWeight='700' fontFamily='Roboto' fontSize='60px' lineHeight='70.31px' color='rgba(255, 255, 255, 1)' position='absolute' top='55%' left='4.75%' >Gallery</Text>
    </Flex>:<Flex width='100%' height='120px' position='relative'>
      <Image width='100%' src={fondoheader} alt='fondo-header'/>
      <Text width='210px' height='73px' fontWeight='700' fontFamily='Roboto' fontSize='35px' lineHeight='70.31px' color='rgba(255, 255, 255, 1)' position='absolute' top='45%' left='4.75%' >Gallery</Text>
    </Flex>}
    </Box>
    
  )
}
