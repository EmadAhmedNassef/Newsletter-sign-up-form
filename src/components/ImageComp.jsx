import { Box } from "@mantine/core";
import React from "react";
import imagePic from "../assets/illustration-sign-up-desktop.svg";
import imageMob from "../assets/illustration-sign-up-mobile.svg";
import Image from "next/image";

export default function ImageComp() {
  return (
    <>
      <Box className="order-1 w-full shrink-0 md:order-2 md:w-[400px]">
        <Image
          src={imagePic}
          alt="signup"
          width={400}
          height={300}
          priority
          className="w-full hidden md:block"
        />
        <Image
          src={imageMob}
          alt="signup"
          width={375}
          height={300}
          priority
          className="w-full block md:hidden"
        />
      </Box>
    </>
  );
}
