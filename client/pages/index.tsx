import client from '../lib/client'
import { gql } from '@apollo/client'
import { ChakraProvider, SimpleGrid, Container } from '@chakra-ui/react'
import Card from '../components/Card'

const Page = ({ persons }) => (
  <ChakraProvider>
    <Container maxW="80rem" centerContent>
      <SimpleGrid columns={[1, 2, 1, 2]}>
        {persons.map(({ name, phone, email, address }, index) => {
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
      persons: data.persons.slice(0, 4),
    },
  }
}

export default Page
