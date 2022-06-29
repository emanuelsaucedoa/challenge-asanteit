import React from 'react'
import { Box, Flex, Text, Input, Image, useMediaQuery } from '@chakra-ui/react'
import lupa from '../../Assets/lupa.png'

export default function Search() {

  const [isLargerThan450] = useMediaQuery('(min-width: 450px)')

  return (
    <Box>
      {isLargerThan450?<Flex width='100%' height='120px' bg='rgba(255, 255, 255, 1)'>
      <Flex width='95%' justifyContent='flex-end' alignItems='center'>
        <Text width='113px' height='25px' fontFamily='Roboto' fontWeight='400' fontSize='20px' lineHeight='23.44px' letterSpacing='0.01rem' color='rgba(136, 136, 136, 1)'>Search by #</Text>
        <Flex width='281px' height='47px' bg='rgba(236, 236, 236, 1)' p='0.4rem' borderRadius='10px'>
          <Input height='100%' outline='none' border='none' _focus={{boxShadow:'none'}}/>
          <Image alignSelf='center' width='29.32px' height='29.91px' src={lupa} alt='lupa'/>
        </Flex>
      </Flex>
    </Flex>:<Flex width='100%' height='100px' bg='rgba(255, 255, 255, 1)' alignItems='center'>
        <Flex width='90%' margin='auto' height='47px' bg='rgba(236, 236, 236, 1)' p='0.4rem' borderRadius='10px'>
          <Input height='100%' outline='none' border='none' _focus={{boxShadow:'none'}}/>
          <Image alignSelf='center' width='29.32px' height='29.91px' src={lupa} alt='lupa'/>
        </Flex>
    </Flex>}
    </Box>
    
  )
}
