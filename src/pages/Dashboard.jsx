import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function Dashboard() {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
      cursor: 'pointer',
    },
  };

  return (
    <Container as="section" maxW="4xl">
      <Heading my="30px" p="10px">
        Chakra UI components
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cum.
      </Text>
      <Text ml="30px" color="blue" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cum.
      </Text>
      <Box bg="orange" p="20px" mt="20px">
        <Text color="white">This is a box element</Text>
      </Box>
      <Box sx={boxStyles}>
        <Text>Hello World</Text>
      </Box>
    </Container>
  );
}

// #2 3:40
