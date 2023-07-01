import React from "react";
import PersonalCabinet from "@/components/personal-cabinet/personal-cabinet";

const Cabinet = () => {
    return (
        <>
            <PersonalCabinet/>
        </>
    );
};

export default Cabinet;

export async function getStaticProps() {
    const user = false;
    if (user) {
      return {
        redirect: { destination: "/cabinet" },
        props: {},
      };
    }
    return {
      props: {},
    };
  }
  
