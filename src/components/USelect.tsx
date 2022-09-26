import { Flex, FormLabel, Select, SelectProps } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

type Props = SelectProps & {
  name: string;
  label: string;
  onChangehandler: Function;
  qtdCaracteres?: number;
};

const CadastroSelectInput: React.FC<Props> = ({
  name,
  label,
  qtdCaracteres,
  onChangehandler,
  ...props
}) => {
  const opcoes: number[] = [1, 2, 3, 4, 5];

  const [_field, meta, helpers] = useField({ name });
  const { setValue } = helpers;

  const { value } = meta;
  const isSelected = (v: any) => (v === value ? "selected" : "");

  return (
    <>
      <Flex flexDir="column" mb="5">
        <FormLabel mb="-5px" fontWeight="semibold">
          {label}
        </FormLabel>
        <Select
          {...props}
          borderColor="#bebebe"
          focusBorderColor="#d1d1d1"
          onChange={(e) => {
            setValue(e.target.value);
            isSelected(e.target.value);
            onChangehandler(e.target.value);
          }}
          variant={"flushed"}
          _hover={{ borderColor: "#939393" }}
        >
          {opcoes.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </Select>
      </Flex>
    </>
  );
};

export default CadastroSelectInput;
