"use client";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function DismissBtn() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Button
      onClick={handleGoBack}
      fullWidth
      variant="filled"
      color="hsl(234, 29%, 20%)"
    >
      Dismiss message
    </Button>
  );
}
