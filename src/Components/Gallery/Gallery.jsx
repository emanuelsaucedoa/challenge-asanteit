import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Card from '../Card/Card.jsx'

export default function Gallery() {
  return (
    <Flex flexDirection='column' width='90%' margin='auto'>
      <Flex width='100%' margin='auto' flexWrap='wrap' justifyContent='center' gap='3rem'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Flex>
    <Text alignSelf='center' mt='50px' color='rgba(194, 63, 129, 1)' fontFamily='Roboto' fontWeight='500' fontSize='20px' lineHeight='23px' letterSpacing='0.01rem'>Load More</Text>
    </Flex>
  )
}
