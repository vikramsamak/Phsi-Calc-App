import { Box } from "native-base";
import React from "react";
import DrawerContent from "./DrawerContent";
import { drawerItems } from "../constants/drawerConfig";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        {drawerItems.map((item: any) => (
          <Drawer.Screen
            name={item.name}
            component={item.component}
            key={item.name}
          />
        ))}
      </Drawer.Navigator>
    </Box>
  );
};

export default DrawerNavigator;
