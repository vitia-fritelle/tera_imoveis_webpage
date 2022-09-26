import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  FormErrorMessage,
  FlexProps,
  Skeleton,
  Stack,
  Text,
  useControllableState,
} from "@chakra-ui/react";

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useField } from "formik";

type Props = FlexProps & {
  name: string;
  label: string;
  // getDados: Function;
  qtdCaracteres?: number;
  onChangehandler: Function;
  valor?: string;
};
const USelectBairro: React.FC<Props> = ({
  name,
  label,
  // getDados,
  qtdCaracteres,
  onChangehandler,
  valor,
  ...props
}) => {

  const [_field, meta, helpers] = useField({ name });
  const { setValue } = helpers;

  const { value } = meta;
  const isSelected = (v: any) => (v === value ? "selected" : "");

  if (valor === undefined || valor === null) {
    valor = "";
  }

  const [escritorioNome, setEscritorioNome] = useControllableState(
    valor as any
  );

  const bairros: string[] = [
    "Jóquei",
    "Jockey",
    "Fátima",
    "Horto",
    "São Cristóvão",
    "Ininga",
    "Santa Isabel",
    "Morada do Sol",
    "Noivos",
    "Morros",
    "Campestre",
    "Pedra Mole",
    "Cidade Jardim",
    "Novo Uruguai",
    "Piçarreira",
    "Planalto",
    "Porto do Centro",
    "Samapi",
    "Santa Lia",
    "Satélite",
    "Socopó",
    "Tabajaras",
    "Uruguai",
    "Vale do Gavião",
    "Vale Quem Tem",
    "Verde Lar",
    "Árvores Verdes",
    "São João",
    "Zoobotânico",
    "Recanto das Palmeiras",
    "Beira Rio",
    "Bom Princípio",
    "Colorado",
    "Comprida",
    "Extrema",
    "Flor do Campo",
    "Gurupi",
    "Itararé",
    "Livramento",
    "Novo Horizonte",
    "Parque Ideal",
    "Parque Poti",
    "Redonda",
    "Renascença",
    "São Raimundo",
    "São Sebastião",
    "Tancredo Neves",
    "Todos os Santos",
    "Verde Cap",
    "Angelim",
    "Angélica",
    "Areias",
    "Bela Vista",
    "Brasilar",
    "Catarina",
    "Cidade Nova",
    "Cristo Rei",
    "Distrito Industrial",
    "Esplanada",
    "Lourival Parente",
    "Macaúba",
    "Monte Castelo",
    "Morada Nova",
    "Parque Jacinta",
    "Parque Juliana",
    "Parque Piauí",
    "Parque São João",
    "Parque Sul",
    "Pedra Miúda",
    "Pio XII",
    "Portal Da Alegria",
    "Promorar",
    "Redenção",
    "Saci",
    "Santa Cruz",
    "Santa Luzia",
    "Santo Antônio",
    "São Lourenço",
    "São Pedro",
    "Tabuleta",
    "Três Andares",
    "Triunfo",
    "Vermelha",
    "Nossa Senhora Das Graças",
    "Aroeiras",
    "Acarape",
    "Aeroporto",
    "Água Mineral",
    "Alegre",
    "Alto Alegre",
    "Parque Alvorada",
    "Bom Jesus",
    "Buenos Aires",
    "Cidade Industrial",
    "Embrapa",
    "Itaperu",
    "Parque Brasil",
    "Mafrense",
    "Mafuá",
    "Matadouro",
    "Memorare",
    "Monte Verde",
    "Mocambinho",
    "Morro da Esperança",
    "Nova Brasília",
    "Olarias",
    "Poti Velho",
    "Primavera",
    "Real Copagre",
    "Santa Maria da Codipe",
    "Santa Rosa",
    "São Joaquim",
    "Chapadinha",
    "Jacinta Andrade",
    "Pirajá",
    "Vila São Francisco",
    "Cabral",
    "Centro Norte",
    "Centro Sul",
    "Porenquanto",
    "Vila Operária",
    "Matinha",
    "Ilhotas",
    "Frei Serafim",
    "Marquês",
    "Piçarra",
  ];


  const onChangeHandler = (e: any) => {
    setEscritorioNome(e.target.value);
  };

  const onSelectChangeHandler = (e: any) => {
    setEscritorioNome(e);
  };

  return (
    <Flex {...props} textTransform="capitalize" mb="20px">
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
      <FormControl isInvalid={!!meta.error && meta.touched}>
        <FormLabel mb="-5px" fontWeight="semibold">{label}</FormLabel>
        <AutoComplete
          openOnFocus
          emptyState={
            <Text
              className="Titulo"
              fontWeight="semibold"
              fontSize="1.0rem"
              ml="20px"
            >
              Nenhum bairro encontrado!
            </Text>
          }
        >
          <AutoCompleteInput
            autoComplete="chrome-off"
            borderColor="#ffffff"
            focusBorderColor="#131313"
            value={(escritorioNome as string) || ""}
            onChange={onChangeHandler}
            // placeholder="Digite o nome do escritório"
            variant="flushed"
            _hover={{ borderColor: "#939393" }}
          />
          <AutoCompleteList>
            {bairros.map((i) => (
              <AutoCompleteItem
                onClick={(e: { currentTarget: { innerHTML: any; }; }) => {
                  onChangehandler(i);
                  setValue(i);
                  isSelected(i);
                  // getDados(i);
                  onSelectChangeHandler(e.currentTarget.innerHTML);
                }}
                key={i}
                value={i}
                textTransform="capitalize"
              >
                {i}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
        <FormErrorMessage mb="-15px">{meta.error}</FormErrorMessage>
      </FormControl>
    </Flex>
  );
};

export default USelectBairro;
