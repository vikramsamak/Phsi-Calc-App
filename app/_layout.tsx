import React from "react";
import DrawerNavigator from "@/components/DrawerNavigator";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider isSSR={false}>
      <DrawerNavigator />
    </NativeBaseProvider>
  );
}
