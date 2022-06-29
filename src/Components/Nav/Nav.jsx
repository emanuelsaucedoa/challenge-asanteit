import React from 'react'
import { Box, Flex, Button, Image, Text, Span } from '@chakra-ui/react'
import acme from '../../Assets/acme.png'

export default function Nav() {
  return (
    <Box width='100%' height='68px' bg='rgba(255, 255, 255, 1)'>
        <Flex width='90%' height='100%' margin='auto' justifyContent='space-between' alignItems='center'>
            <Flex>
                <Image width='114.3px' height='37.51px' src={acme} alt='acme' />
                <Text alignSelf='flex-end' fontFamily='Oriya MN' fontStyle='normal' fontWeight='700' fontSize='23px' color='rgba(116, 102, 126, 1)' lineHeight='28px' >gallery</Text>
                <Text mt='0.4rem' width='12.37px' height='12.37px' borderRight='2px' borderBottom='2px' borderColor='rgba(194, 63, 129, 1)' ></Text>
            </Flex>
            <Button width='81px' height='37px' borderRadius='8px' bg='rgba(194, 63, 129, 1)' color='rgba(255, 255, 255, 1)' fontWeight='500' fontFamily='Roboto' lineHeight='18.75px' _hover={{bg:'rgba(194, 63, 129, 1)'}} _active={{bg:'rgba(194, 63, 129, 1)'}} >LOGIN</Button>
        </Flex>
    </Box>
  )
}
