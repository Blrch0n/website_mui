"use client";

import ActionAreaCard from "@/components/Card";
import { CustomInput } from "@/components/CustomInput";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import Footer from "@/components/footer";
import { Stack } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("initial value");
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValue(event.currentTarget.value);
  }
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      gap={2}
      sx={{ width: 1, height: "100%" }}
    >
      <CustomInput
        placeholder="Enter value..."
        label="Email"
        type="Email"
        onChange={handleChange}
        value={value}
      />
      <CustomInput
        placeholder="Enter value..."
        label="Password"
        type="password"
        onChange={handleChange}
        value={value}
      />
      <ResponsiveAppBar></ResponsiveAppBar>
      <ActionAreaCard></ActionAreaCard>
      <ActionAreaCard></ActionAreaCard>
      <Footer></Footer>
    </Stack>
  );
}
