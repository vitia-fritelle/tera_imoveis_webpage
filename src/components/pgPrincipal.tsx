import { useState } from "react";
import {
  Container,
  extendTheme,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Spacer,
  Text,
  useDisclosure,
  useToast,
  VStack,
  Box,
  Link,
  Code,
  GridItem,
  Grid,
  theme,
  Input,
  Flex,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import UInput from "./UInput";
import USelectBairro from "./USelectBairro";
import USelectCategoria from "./USelectCategoria";
import CadastroSelectInput from "./USelect";
import axios, { AxiosError } from "axios";

export function PgPrincipal() {
  const [Bairro, setBairro] = useState("");
  const onBairroChangeHandler = (bairro: string) => {
    setBairro(bairro!);
  };

  const [Categoria, setCategoria] = useState("");
  const onCategoriaChangeHandler = (categoria: string) => {
    setCategoria(categoria!);
  };

  const [Quartos, setQuartos] = useState(1);
  const onQuartosChangeHandler = (quartos: number) => {
    setQuartos(quartos!);
  };

  const [Banheiro, setBanheiro] = useState(1);
  const onBanheiroChangeHandler = (banheiros: number) => {
    setBanheiro(banheiros!);
  };

  const [VagasGaragem, setVagasGaragem] = useState(1);
  const onVagasGaragemChangeHandler = (area: number) => {
    setVagasGaragem(area!);
  };

  const [AreaCosntruida, setAreaCosntruida] = useState(1);
  const onAreaCosntruidaChangeHandler = (area: number) => {
    setAreaCosntruida(area!);
    console.log(area);
  };

  const [ValorRecebido, setValorRecebido] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Overlay = (
    <ModalOverlay
      bg="rgba(0, 0, 0, 0.65)"
      backdropFilter="blur(2px)"
      w="100%"
    />
  );

  function formatReal(numero: number) {
    var tmp = numero + "";
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }

  return (
    <>
      <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        {Overlay}
        <ModalContent w="40vw" h="auto" maxW="none" alignSelf="center">
          <ModalCloseButton
            mr="-50px"
            mt="-50px"
            justifyContent="center"
            _hover={{ textColor: "black", bgColor: "#ffeb89" }}
            color="black"
            bgColor="white"
            borderRadius="full"
            border="0px"
            colorScheme="teal"
            variant="ghost"
            _focus={{ boxShadow: "none", textColor: "black", bg: "#d7d7d7" }}
            _active={{
              bg: "#ededed",
              transform: "scale(1.02)",
              textColor: "white",
              borderColor: "#dbdbdb",
            }}
          />
          <ModalBody>
            <VStack>
              <Flex
                flexDir="column"
                width="100%"
                position="relative"
                zIndex="1"
                paddingBottom="0.75rem"
              >
                <Flex flexDir="row" mt="2">
                  <Heading></Heading>
                </Flex>
                <Flex flexDir="column" paddingX="1.5rem">
                  <Center>
                    <Text
                      paddingTop="1.5rem"
                      paddingBottom="2rem"
                      fontSize="2.25rem"
                      fontWeight="700"
                      textAlign="center"
                    >
                      O valor de seu imóvel foi estimado em:
                    </Text>
                  </Center>
                  <Center alignItems="baseline" w="100%" mr="15px" mb="1.2vh">
                    <Text className="Titulo" fontSize="2.5rem" fontWeight="500" mr="10px">
                    {/* R$ 375.000,00 */}
                    {ValorRecebido}
                    </Text>
                  </Center>
                  <Center mt="6vh" mb="4vh"></Center>
                </Flex>
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Formik
        initialValues={{
          quartos: Quartos,
          banheiros: Banheiro,
          vagasGaragem: AreaCosntruida,
          areaConstruida: "",
          tipoImovel: Categoria,
          bairro: Bairro,
        }}
        validationSchema={Yup.object({
          areaConstruida: Yup.number()
            .positive()
            .required("A área construída é obrigatória!"),
          tipoImovel: Yup.string().required("O tipo de imóvel é obrigatório!"),
          bairro: Yup.string().required("O bairro é obrigatório!"),
        })}
        onSubmit={async (values, actions) => {
          try {
            const response = await axios({
              method: "post",
              url: "https://tera-imoveis-backend.herokuapp.com/api",
              data: {
                quartos: Quartos,
                banheiros: Banheiro,
                vagas: VagasGaragem,
                area: values.areaConstruida,
                categoria: Categoria,
                bairro: Bairro,
              }, 
            }).then((response) => {
              setValorRecebido(response.data.data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
              onOpen();
              console.log();
            });
            
          } catch (error: any) {
            console.log((error as AxiosError).response?.data);
            console.log((error as AxiosError).request);
          }
          // actions.resetForm();
        }}
      >
        <Flex
          as={Form}
          id="form"
          justifyContent="center"
          bgImage="background_image.png"
          minH="100vh"
        >
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
          <Flex flexDir="row" mt="8vh">
            <Flex
              boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
              alignItems="center"
              flexDir="column"
              bgColor="#c6c6c67e"
              backdropFilter="blur(4px)"
              border="2px"
              borderColor="#fff"
              borderRadius="20px"
              w="25rem"
              h="fit-content"
            >
              <Flex flexDir="column" alignItems="center" mt="30px" mb="20px">
                <Text
                  fontSize="1.5rem"
                  fontFamily="Poppins"
                  fontWeight="bold"
                  color="#000000"
                  // mt={4}
                  mb="20px"
                >
                  O imóvel
                </Text>
                <USelectBairro
                  name="bairro"
                  label="Bairro:"
                  onChangehandler={onBairroChangeHandler}
                  w="22vw"
                />
                <UInput
                  name="areaConstruida"
                  // placeholder="Digite número de quartos..."
                  label="Área construída:"
                />
                <CadastroSelectInput
                  name="quartos"
                  w="22vw"
                  onChangehandler={onQuartosChangeHandler}
                  // placeholder="Digite número de quartos..."
                  label="Quantidade de quartos"
                />
                <CadastroSelectInput
                  name="banheiros"
                  w="22vw"
                  onChangehandler={onBanheiroChangeHandler}
                  // placeholder="Digite número de banheiros..."
                  label="Quantidade de banheiros"
                />
                <CadastroSelectInput
                  name="vagasGaragem"
                  w="22vw"
                  onChangehandler={onVagasGaragemChangeHandler}
                  // placeholder="Digite a quantidade vagas de garagem..."
                  label="Quantidade de vagas de garagem"
                />
                <USelectCategoria
                  name={"tipoImovel"}
                  label={"Tipo de imóvel:"}
                  onChangehandler={onCategoriaChangeHandler}
                  w="22vw"
                />
              </Flex>
              <Flex>
                <Button
                  bgColor="#FFD600"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15);"
                  type="submit"
                  form="form"
                  textColor="white"
                  mb="20px"
                  _hover={{ textColor: "white", bgColor: "#e5c003" }}
                  _focus={{
                    boxShadow: "none",
                    textColor: "white",
                    bg: "#d7c048",
                  }}
                  _active={{
                    bg: "#d7c048",
                    transform: "scale(1.02)",
                    textColor: "white",
                    borderColor: "#dbdbdb",
                  }}
                >
                  Calcular
                </Button>
              </Flex>
            </Flex>
            <Text
              fontSize="5rem"
              textAlign="left"
              textColor="#00E091"
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="90px"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              // mr="21vw"
              ml="1vw"
            >
              Quanto <br /> vale <br /> meu <br /> imóvel?
            </Text>
          </Flex>
        </Flex>
      </Formik>
    </>
  );
}
