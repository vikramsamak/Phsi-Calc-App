import { Box } from "native-base";
import React from "react";
import DrawerContent from "./DrawerContent";
import { drawerItems } from "@/constants/DrawerConfig";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const homeItem = drawerItems.find((item) => item.name === "Home");
  const rateUSItem = drawerItems.find((item) => item.name === "RateUs");
  const otherItems = drawerItems.filter(
    (item) => item.name !== "Home" && item.name !== "RateUs"
  );

  const sortedOtherItems = otherItems.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  const sortedDrawerItems = [homeItem!, ...sortedOtherItems, rateUSItem!];

  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        {sortedDrawerItems.map((item: any) => (
          <Drawer.Screen
            name={item.name}
            component={item.component}
            key={item.name}
          />
        ))}
      </Drawer.Navigator>
    </Box>
  );
}

export default DrawerNavigator;
