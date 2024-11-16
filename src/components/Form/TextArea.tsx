import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import {
  TextareaProps as ChakraTextareaProps,
  FormErrorMessage,
  FormControl,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";

type TextareaCloseBaseProps = {
  label?: string;
  error?: FieldError;
} & ChakraTextareaProps;

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaCloseBaseProps
> = ({ label, error = null, ...rest }, ref) => {
  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <Textarea {...rest} ref={ref} size="lg" />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const MyTextArea = forwardRef(TextareaBase);
export default MyTextArea;
