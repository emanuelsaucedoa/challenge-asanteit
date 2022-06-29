import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import imageCard from '../../Assets/image-card.png'
import profileCard from '../../Assets/profile-card.png'

export default function Card() {
  return (
    <Flex width='365px' height='365px' borderRadius='10px' bg='rgba(214, 213, 214, 0.45)' flexDirection='column'>
        <Image width='370px' height='290px' src={imageCard} alt='image-card' />
        <Flex padding='0.8rem' >
            <Image borderRadius='100%' objectFit='contain' src={profileCard} alt='profile-card' />
            <Flex flexDirection='column' ml='0.7rem'>
                <Text fontFamily='Roboto' fontWeight='500' lineHeight='19px' letterSpacing='0.01rem' color='rgba(49, 49, 49, 1)'>Sam Jerremy</Text>
                <Text mt='0.3rem' fontFamily='Roboto' fontWeight='400' lineHeight='19px' letterSpacing='0.01rem' color='rgba(0, 0, 0, 1)'>#dayAtTheBeatch</Text>
            </Flex>
        </Flex>
    </Flex>
  )
}
