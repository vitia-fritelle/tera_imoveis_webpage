import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import React, { ChangeEvent } from "react";

type Props = InputProps & {
  name: string;
  label: string;
  qtdCaracteres?: number;
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const UInput: React.FC<Props> = ({
  name,
  label,
  qtdCaracteres,
  onChangeHandler,
  ...props
}) => {
  const [field, meta] = useField({ name });
  return (
    <FormControl isInvalid={!!meta.error && meta.touched} mb="20px">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <FormLabel mb="-5px" fontWeight="semibold">
        {label}
      </FormLabel>
      <Input
        {...props}
        onInput={onChangeHandler}
        as={Field}
        {...field}
        maxLength={qtdCaracteres !== undefined ? qtdCaracteres : 255}
        autoComplete="off"
        borderColor="#ffffff"
        focusBorderColor="#d1d1d1"
        variant="flushed"
        _hover={{ borderColor: "#939393" }}
      />
      <FormErrorMessage mb="-15px">{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
export default UInput;
