import { Box, Center } from "@mantine/core";
import React from "react";
import ImageComp from "./ImageComp";
import DescComp from "./DescComp";

export default function FormComp() {
  return (
    <Center className="min-h-screen p-4 sm:p-6 md:p-0">
      <Box className="w-full max-w-[820px] overflow-hidden bg-white rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between md:p-4">
        <DescComp />
        <ImageComp />
      </Box>
    </Center>
  );
}
