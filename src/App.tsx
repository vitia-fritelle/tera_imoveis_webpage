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
  Text,
  VStack,
} from "@chakra-ui/react";
import { PgPrincipal } from "./components/pgPrincipal";

export const App = () => (
  <ChakraProvider theme={theme}>
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
    />
    <PgPrincipal />
    {/* <Spacer h="400px" /> */}
    <VStack  spacing="10%" flexDir="column">
      <Flex justifyContent="center" margin="5% 10% 5% 10% ">
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="5vw"
          justifyContent="center"
        >
          <GridItem w="25vw" h="10">
            <Flex textAlign="center" alignContent="center" flexDir="column">
              <Image src="obtenhaIcon.png" alignSelf="center" />
              <Text fontWeight="700" fontSize="1.375rem" mb="8px">
                Obtenha uma estimativa imparcial
              </Text>
              <Text fontSize="1.375rem" lineHeight="1.375rem">
                Cálculo baseado em dados de mercado
              </Text>
            </Flex>
          </GridItem>
          <GridItem w="25vw" h="10">
            <Flex textAlign="center" alignContent="center" flexDir="column">
              <Image src="vendaIcon.png" alignSelf="center" />
              <Text fontWeight="700" fontSize="1.375rem" mb="8px">
                Venda seu imóvel mais rápido
              </Text>
              <Text fontSize="1.375rem" lineHeight="1.375rem">
                A precificação justa faz com que seu imóvel tenha oferta
                competitiva com o cenário atual
              </Text>
            </Flex>
          </GridItem>
          <GridItem w="25vw" h="10">
            <Flex textAlign="center" alignContent="center" flexDir="column">
              <Image src="acompIcon.png" alignSelf="center" />
              <Text fontWeight="700" fontSize="1.375rem" mb="8px">
                Acompanhe seu patrimônio líquido
              </Text>
              <Text fontSize="1.375rem" lineHeight="1.375rem">
                Obtenha uma avaliação em tempo real do seu maior ativo: Sua Casa
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      <Spacer />
      <Flex flexDir="column" padding="0 7vw 5% 7vw">
        <Text fontWeight="700" fontSize="1.375rem" mb="8px">
          O que é uma estimativa instantânea?
        </Text>
        <Text fontSize="1.375rem" lineHeight="1.375rem">
          Estimativa instantânea é o valor de mercado atualizado para um imóvel
          usando inteligência artificial. <br /> <br /> Nosso algoritmo coleta o
          preço de venda e demais características dos imóveis anunciados em sua
          cidade e através de técnicas de machine learning consegue calcular o
          melhor valor do seu imóvel.
        </Text>
      </Flex>
    </VStack>
  </ChakraProvider>
);
