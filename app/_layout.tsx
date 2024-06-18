import { Stack } from "expo-router";
import React from "react";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider isSSR={false}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </NativeBaseProvider>
  );
}
