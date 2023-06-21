import React, { useState } from "react";
import styles from "./signup-form.module.css";
import { Input, InputLabel, TextField } from "@mui/material";
import CustomInput from "@/components/input/input";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatingPassword, setRepeatingPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" E-mail:", email, "\n", "Password:", password, "\n");
  };

  return (
    <section className={styles.section}>
      <Image
        src="/icons/logo.svg"
        alt="logo"
        width={32}
        height={25}
        className={styles.logo}
      />
      <div className={styles.content}>
        <h2>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <CustomInput
            options={{
              label: "Email address",
              type: "email",
              required: true,
            }}
            onChange={setEmail}
            value={email}
          />
          <CustomInput
            options={{
              label: "Password",
              type: "password",
              required: true,
            }}
            onChange={setPassword}
            value={password}
          />{" "}
          <CustomInput
            options={{
              label: "Repeat password",
              type: "password",
              required: true,
            }}
            onChange={setRepeatingPassword}
            value={repeatingPassword}
          />
          <Button>Create an account</Button>
        </form>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
