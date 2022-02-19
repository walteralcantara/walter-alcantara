import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useState,
} from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputCloseBaseProps extends ChakraInputProps {
  label?: string;
  icon?: ReactNode;
  placeholder: string;
  type?: string;
  showPasswordButton?: boolean;
  error: FieldError | undefined;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputCloseBaseProps
> = (
  { label, placeholder, type, icon, showPasswordButton, error = null, ...rest },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const typeIsPassword = type === "password" ? true : false;

  return (
    <FormControl as="fieldset" isInvalid={!!error}>
      {label && <FormLabel my={2}>{label}</FormLabel>}

      <InputGroup flexDir="column">
        {icon && (
          <InputLeftElement pointerEvents="none" h="100%">
            {icon}
          </InputLeftElement>
        )}

        <Input
          placeholder={placeholder}
          ref={ref}
          size="lg"
          type={typeIsPassword ? (showPassword ? "text" : "password") : type}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}

        {showPasswordButton && type === "password" && (
          <InputRightElement>
            <Button onClick={handleShowPassword} variant="unstyled">
              {showPassword ? (
                <Icon as={ViewIcon} color="gray.300" fontSize={20} />
              ) : (
                <Icon as={ViewOffIcon} color="gray.300" fontSize={20} />
              )}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const InputCloseBase = forwardRef(InputBase);
export default InputCloseBase;
