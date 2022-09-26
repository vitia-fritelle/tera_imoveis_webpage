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
const USelectCategoria: React.FC<Props> = ({
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

  const bairros: string[] = ["Apartamentos", "Casas"];

  // field;

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
              Nenhuma categoria encontrada!
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
                onClick={(e: { currentTarget: { innerHTML: any } }) => {
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

export default USelectCategoria;
