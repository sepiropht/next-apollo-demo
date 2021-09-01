import React from 'react'
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
} from '@chakra-ui/react'

interface Cardprops {
  name: string
  phone: string
  email: string
  address: string
}

const Card = ({ name, phone, email, address }: Cardprops) => (
  <Box
    p={4}
    display={{ md: 'flex' }}
    maxWidth="32rem"
    borderWidth={1}
    margin={2}
  >
    <Stack
      align={{ base: 'center', md: 'stretch' }}
      textAlign={{ base: 'center', md: 'left' }}
      mt={{ base: 4, md: 0 }}
      ml={{ md: 6 }}
    >
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="lg"
        letterSpacing="wide"
        color="teal.600"
      >
        {name}
      </Text>
      <Link
        my={1}
        display="block"
        fontSize="md"
        lineHeight="normal"
        fontWeight="semibold"
        href="#"
      >
        {address}
      </Link>
      <Text my={2} color="gray.500">
        {phone}
      </Text>
      <Text my={2} color="gray.500">
        {email}
      </Text>
    </Stack>
  </Box>
)

export default Card
