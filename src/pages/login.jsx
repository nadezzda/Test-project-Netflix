import React from "react";
import LoginForm from "@/components/login-page/login-form";
const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;

export async function getStaticProps() {
  const user = false;
  if (user) {
    return {
      redirect: { destination: "/" },
      props: {},
    };
  }
  return {
    props: {},
  };
}
