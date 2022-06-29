import React from 'react'
import { Flex, Text, Input, Image } from '@chakra-ui/react'
import lupa from '../../Assets/lupa.png'

export default function Search() {
  return (
    <Flex width='100%' height='120px' bg='rgba(255, 255, 255, 1)'>
      <Flex width='95%' justifyContent='flex-end' alignItems='center'>
        <Text width='113px' height='25px' fontFamily='Roboto' fontWeight='400' fontSize='20px' lineHeight='23.44px' letterSpacing='0.01rem' color='rgba(136, 136, 136, 1)'>Search by #</Text>
        <Flex width='281px' height='47px' bg='rgba(236, 236, 236, 1)' p='0.4rem' borderRadius='10px'>
          <Input height='100%' outline='none' border='none' _focus={{boxShadow:'none'}}/>
          <Image alignSelf='center' width='29.32px' height='29.91px' src={lupa} alt='lupa'/>
        </Flex>
      </Flex>
    </Flex>
  )
}
