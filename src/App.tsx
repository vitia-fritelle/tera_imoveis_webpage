import {
  ChakraProvider,
  Box,
  theme,
  Image,
  Grid,
  GridItem,
  Flex,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { PgPrincipal } from "./components/pgPrincipal";

export const App = () => (
  <ChakraProvider theme={theme}>
    <PgPrincipal />
    {/* <Spacer h="400px" /> */}
    <Flex justifyContent="center">
      <Grid templateColumns="repeat(3, 1fr)" gap="15vw">
        <GridItem w="100px" h="10" bg="blue.500" />
        <GridItem w="100px" h="10" bg="blue.500" />
        <GridItem w="100px" h="10" bg="blue.500" />
      </Grid>
    </Flex>
  </ChakraProvider>
);
