"use client";
import { Button, TextInput } from "@mantine/core";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as Yup from "yup";

export default function InputComp() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Valid email required")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      router.push(`/success?email=${encodeURIComponent(values.email)}`);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="mb-5">
        <TextInput
          label="Email Address"
          placeholder="email@company.com"
          mb={20}
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          error={formik.errors.email}
          className="relative"
          styles={{
            input: {
              backgroundColor: formik.errors.email ? "#fecaca" : "white",
            },
            error: {
              position: "absolute",
              right: 0,
              top: "5px",
            },
          }}
        />
        <Button
          className="hover:bg-[#F84E4E]"
          fullWidth
          type="submit"
          variant="filled"
          color="hsl(234, 29%, 20%)"
        >
          Subscribe to monthly newsletter
        </Button>
      </form>
    </>
  );
}
