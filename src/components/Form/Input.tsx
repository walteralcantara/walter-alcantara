import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError } from "react-hook-form";
import {
  Input,
  InputGroup,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

type InputCloseBaseProps = {
  label?: string;
  icon?: ReactNode;
  placeholder: string;
  type?: string;
  showPasswordButton?: boolean;
  error: FieldError | undefined;
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputCloseBaseProps
> = (
  { label, placeholder, type, icon, showPasswordButton, error = null, ...rest },
  ref
) => {
  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      {label && <FormLabel my={2}>{label}</FormLabel>}

      <InputGroup flexDir="column">
        <Input placeholder={placeholder} ref={ref} size="lg" {...rest} />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const MyInput = forwardRef(InputBase);
export default MyInput;
