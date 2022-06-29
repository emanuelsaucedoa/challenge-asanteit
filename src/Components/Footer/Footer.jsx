import React from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import acmeFooter from '../../Assets/acme-footer.png'
import copyright from '../../Assets/copyright.png'

export default function Footer() {
  return (
    <Flex height='61px' bg='rgba(49, 49, 49, 1)' mt='100px' flexDirection='column'>
      <Box width='100%' bg='rgba(194, 63, 129, 1)' height='6px'></Box>
      <Flex justifyContent='center' height='100%' alignItems='center'>
        <Flex>
          <Image src={acmeFooter} alt='acme-footer' />
          <Text alignSelf='flex-end' fontFamily='Oriya MN' fontStyle='normal' fontWeight='400' fontSize='17px' color='rgba(255, 255, 255, 1)' lineHeight='21px' >gallery</Text>
          <Text mt='0.3rem' width='9.32px' height='9.32px' borderRight='2px' borderBottom='2px' borderColor='rgba(194, 63, 129, 1)' ></Text>
        </Flex>
        <Image ml='1rem' mt='0.7rem' src={copyright} alt='copyright' />
      </Flex>
    </Flex>
  )
}
