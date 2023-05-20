import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type ModalProps = {
  title?: string;
  onCloseLabel?: string;
  children: ReactNode;
  isModalVisible: boolean;
  onClose: () => void;
};

export const Modal = ({
  title = "",
  onCloseLabel = "Ok",
  isModalVisible,
  children,
  onClose,
}: ModalProps) => {
  return (
    <ChakraModal isOpen={isModalVisible} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Text as="h3">{title}</Text>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>{onCloseLabel}</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
