import DrawerNavigator from "@/components/DrawerNavigator";
import { NativeBaseProvider } from "native-base";
import React from "react";

export default function RootLayout() {
  return (
    <NativeBaseProvider isSSR={false}>
      <DrawerNavigator />
    </NativeBaseProvider>
  );
}
