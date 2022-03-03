import {
  Button,
  Flex,
  Icon,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import { SlidePage } from "components/Layout/components/SlidePage";
import { PageContainer } from "components/Layout/components/PageContainer";
import { PageContent } from "components/Layout/components/PageContent";
import { Heading } from "components/Layout/components/Heading";

import InputCloseBase from "components/Form/Input";
import TextareaCloseBase from "components/Form/Textarea";

type FormValues = {
  email: string;
  message: string;
  name: string;
};

const contactFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("E-mail is required").email("E-mail is invalid"),
  message: yup.string().required("Message is required"),
});
const Contact = () => {
  const form = useRef(null!);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    emailjs
      .sendForm(
        "service_5loz08t",
        "template_6ur8p2v",
        form.current,
        "user_FA7mVfVemsrU5YZaCsAxG"
      )
      .then(
        () => {
          toast({
            title: "Successfully sent! 🎉",
            status: "success",
            position: "top-right",
          });
        },
        () => {
          toast({
            title: "An error occurred ❌ ",
            status: "error",
            position: "top-right",
          });
        }
      )
      .finally(() => reset());
  };
  return (
    <PageContainer>
      <SlidePage direction="left" href="/portfolio">
        Portfolio
      </SlidePage>

      <PageContent>
        <Heading
          title="Contact"
          subtitle="You can reach me through the following links or you could send me a message."
        />

        <Flex
          justify="space-between"
          gap={{ base: "2", sm: "12" }}
          flexDir={{ base: "column", sm: "row" }}
        >
          <VStack
            as="form"
            spacing={4}
            width="100%"
            flex=".9"
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
          >
            <InputCloseBase
              label="Your name"
              placeholder="Type your name..."
              {...register("name")}
              error={errors.name}
            />

            <InputCloseBase
              label="Your e-mail address"
              placeholder="Type your e-mail..."
              {...register("email")}
              error={errors.email}
            />

            <TextareaCloseBase
              label="Message"
              placeholder="Type your message..."
              {...register("message")}
              error={errors.message}
            />

            <Button type="submit" w="100%" size="lg" variant="highlighted">
              Send
            </Button>
          </VStack>

          <VStack
            flex=".1"
            flexDir={{ base: "row", sm: "column" }}
            justify={{ base: "space-between", sm: "unset" }}
            flexWrap="wrap"
          >
            <Link
              href="https://www.linkedin.com/in/walteralcantara/"
              target="_blank"
              d="flex"
              alignItems="center"
            >
              <Icon as={BsLinkedin} minWidth="40px" minHeight="40px" />
              <Text ml="2" fontSize={{ base: "14px", sm: "16px" }}>
                /walteralcantara
              </Text>
            </Link>

            <Link
              href="https://github.com/walteralcantara"
              target="_blank"
              d="flex"
              alignItems="center"
            >
              <Icon as={FaGithubSquare} minWidth="45px" minHeight="45px" />
              <Text ml="2" fontSize={{ base: "14px", sm: "16px" }}>
                /walteralcantara
              </Text>
            </Link>
          </VStack>
        </Flex>
      </PageContent>

      <SlidePage direction="right" href="/">
        Home
      </SlidePage>
    </PageContainer>
  );
};

export default Contact;
