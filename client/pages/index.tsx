import { useState } from 'react'
import client from '../lib/client'
import { gql } from '@apollo/client'
import { ChakraProvider, SimpleGrid, Container, Input } from '@chakra-ui/react'
import Card from '../components/Card'

const Page = ({ persons }) => {
  const [searchTerm, setSearch] = useState('')
  return (
    <ChakraProvider>
      <Container maxW="80rem" centerContent marginTop={10}>
        <Input
          placeholder="Search user"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {persons
            .filter(
              ({ name }) =>
                (searchTerm.length > 2 &&
                  name.toLowerCase().startsWith(searchTerm.slice(0, 3))) ||
                searchTerm.length < 3
            )
            .map(({ name, phone, email, address }, index) => {
              return (
                <Card
                  key={index}
                  name={name}
                  phone={phone}
                  email={email}
                  address={address}
                />
              )
            })}
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Person {
        persons {
          name
          address
          email
          phone
        }
      }
    `,
  })

  return {
    props: {
      persons: data.persons,
    },
  }
}

export default Page
