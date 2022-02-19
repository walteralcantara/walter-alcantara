import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import {
  TextareaProps as ChakraTextareaProps,
  FormErrorMessage,
  FormControl,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface TextareaCloseBaseProps extends ChakraTextareaProps {
  label?: string;
  error?: FieldError;
}

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

const TextareaCloseBase = forwardRef(TextareaBase);
export default TextareaCloseBase;

