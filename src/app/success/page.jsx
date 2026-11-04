import { Box, Center, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import sucessLogo from "../../assets/icon-success.svg";
import DismissBtn from "@/components/DismissBtn";

export const metadata = {
  title: "Success Page",
  description: "A simple success page",
};

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams;
  const email = params?.email || "";

  return (
    <Center className="min-h-screen p-4 sm:p-6">
      <Box className="w-full max-w-[400px] rounded-3xl bg-white p-6 sm:p-10">
        <Image
          src={sucessLogo}
          alt="success"
          width={50}
          height={50}
          className="mb-8"
        />
        <Text mb={20} size="xl" className="text-3xl" fw="bolder">
          Thanks for subscribing!
        </Text>
        <Text size="sm" mb={20}>
          A confirmation email has been sent to{" "}
          <strong>{email}.</strong> Please open it and click the button inside
          to confirm your subscription.
        </Text>
        <DismissBtn />
      </Box>
    </Center>
  );
}
