import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Text,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

export const Modal = ({ modalState }: any) => {
  const { isModalOpen, setModalOpen, modalProps } = modalState;
  const { img, name, description } = modalProps;

  return (
    <ChakraModal isOpen={isModalOpen} onClose={setModalOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader d="flex" alignItems="center">
          <Image src={img} alt={name} width={50} height={50} />
          <Text ml="4">{name}</Text>
        </ModalHeader>

        <ModalCloseButton />
        
        <ModalBody>
          <Box  gridTemplateColumns="50px 4fr" alignItems="center">
            <Text ml="2">{description}</Text>
          </Box>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </ChakraModal>
  );
};
