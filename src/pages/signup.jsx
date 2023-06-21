import React from "react";
import SignupForm from "@/components/signup-page/signup-form";

const SignupPage = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default SignupPage;

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
