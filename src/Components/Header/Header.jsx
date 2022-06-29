import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import fondoheader from '../../Assets/fondo-header.png'

export default function Header() {
  return (
    <Flex width='100%' height='208px' position='relative'>
      <Image width='100%' src={fondoheader} alt='fondo-header'/>
      <Text width='210px' height='73px' fontWeight='700' fontFamily='Roboto' fontSize='60px' lineHeight='70.31px' color='rgba(255, 255, 255, 1)' position='absolute' top='55%' left='4.75%' >Gallery</Text>
    </Flex>
  )
}
