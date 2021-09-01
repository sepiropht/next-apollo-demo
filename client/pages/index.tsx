import { useState } from 'react'
import client from '../lib/client'
import { gql } from '@apollo/client'
import { ChakraProvider, Container, Input } from '@chakra-ui/react'
import Grid from '../components/Grid'

const Page = ({ persons }) => {
  const [searchTerm, setSearch] = useState('')
  return (
    <ChakraProvider>
      <Container maxW="80rem" centerContent marginTop={10}>
        <Input
          placeholder="Search user"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Grid persons={persons} searchTerm={searchTerm}></Grid>
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
      persons: data.persons.slice(0, 20),
    },
  }
}

export default Page
