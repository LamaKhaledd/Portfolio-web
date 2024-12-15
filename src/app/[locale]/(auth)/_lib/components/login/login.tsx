"use client";
import { Stack, Title, Button, Paper, Grid, GridCol, Flex, Modal, TextInput } from "@mantine/core";
import { FormProvider } from "react-hook-form";
import InputRenderer from "@InputRenderer/portfolio-inputs-renderer";
import { loginSchema } from "@auth/_lib/utils/login-schema";
import { useGradientBackground } from "@auth/_lib/hooks/gradient-background";
import { useLoginForm } from "@auth/_lib/hooks/use-login-form";
import PortfolioAnchor from "@components/anchor/portfolio-anchor";

const LoginForm = () => {
  const {
    methods,
    loading,
    modalOpened,
    forgotEmail,
    setForgotEmail,
    setModalOpened,
    submit,
    handleForgotPasswordSubmit,
  } = useLoginForm();

  const background = useGradientBackground();

  return (
    <Flex bg={background} mih="100vh" align="center" justify="center">
      <FormProvider {...methods}>
        <Paper p="xl" withBorder shadow="md" miw="40rem" mx="auto">
          <form onSubmit={methods.handleSubmit(submit)}>
            <Stack>
              <Title ta="center" order={2} mb="lg">
                LOGIN
              </Title>

              <Grid>
                {loginSchema.map((schema) => (
                  <GridCol span={12} key={schema.name}>
                    <InputRenderer schema={schema} />
                  </GridCol>
                ))}
              </Grid>

              <PortfolioAnchor
                schema={{
                  label: "Forgot your password?",
                  size: "sm",
                  color: "blue",
                  textAlign: "left",
                }}
                onClick={() => setModalOpened(true)}
              />

              <Button type="submit" loading={loading}>
                Login
              </Button>

              <PortfolioAnchor
                schema={{
                  label: "Don’t have an account? Sign up!",
                  size: "sm",
                  color: "blue",
                }}
                onClick={() => methods.reset()}
              />
            </Stack>
          </form>
        </Paper>
      </FormProvider>

      <Modal
        size="md"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Forgot Password?"
        pt="xl"
        centered
      >
        <Stack>
          <TextInput
            label="Enter your email to send you a link to reset your password"
            placeholder="example@domain.com"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.currentTarget.value)}
          />
          <Button onClick={handleForgotPasswordSubmit}>Submit</Button>
        </Stack>
      </Modal>
    </Flex>
  );
};

export default LoginForm;
