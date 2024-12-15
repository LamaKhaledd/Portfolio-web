"use client";
import React from "react";
import {
  Stack,
  Title,
  Button,
  Paper,
  Grid,
  GridCol,
  Flex,
} from "@mantine/core";
import { FormProvider } from "react-hook-form";
import InputRenderer from "@/core/ui/components/inputs-renderer/portfolio-inputs-renderer";
import { signUpFields } from "@auth/_lib/utils/signup-schema";
import { useSignUpForm } from "@auth/_lib/hooks/use-signup-form";
import { useGradientBackground } from "@auth/_lib/hooks/gradient-background";
import PortfolioAnchor from "@/core/ui/components/anchor/portfolio-anchor";

const SignUpForm = () => {
  const { methods, loading, submit, handleLoginClick } = useSignUpForm();
  const background = useGradientBackground();
  return (
    <Flex bg={background}>
      <FormProvider {...methods}>
        <Paper
          p="xl"
          withBorder
          shadow="md"
          maw="40rem"
          mx="auto"
          mt="5rem"
          mb="5rem"
        >
          <form onSubmit={methods.handleSubmit(submit)}>
            <Stack>
              <Title ta="center" order={2} mb="lg">
                SIGN UP
              </Title>

              <Grid>
                {signUpFields.map((field, index) => (
                  <GridCol span={12} key={index} pb="md">
                    <InputRenderer schema={field} />
                  </GridCol>
                ))}
              </Grid>

              <Button type="submit" loading={loading}>
                Sign Up
              </Button>

              <PortfolioAnchor
                schema={{
                  label: "Already have an account? Login!",
                  color: "blue",
                  size: "sm",
                  underline: true,
                }}
                onClick={handleLoginClick}
              />
            </Stack>
          </form>
        </Paper>
      </FormProvider>
    </Flex>
  );
};

export default SignUpForm;