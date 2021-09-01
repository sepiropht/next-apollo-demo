import { SimpleGrid } from '@chakra-ui/react'
import Card from './Card'

const Grid = ({ persons, searchTerm }) => (
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
)

export default Grid
