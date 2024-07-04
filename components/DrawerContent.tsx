import React from "react";
import { Text, VStack, Divider, Pressable, HStack, Icon } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { drawerItems } from "@/constants/DrawerConfig";

export default function DrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack divider={<Divider />} space="4">
        <VStack space="3">
          {drawerItems.map((item, index) => (
            <Pressable
              px="5"
              py="3"
              rounded="md"
              bg={
                index === props.state.index
                  ? "rgba(6, 182, 212, 0.1)"
                  : "transparent"
              }
              onPress={() => {
                props.navigation.navigate(item.name);
              }}
              key={item.name}
            >
              <HStack space="7" alignItems="center">
                <Icon
                  as={MaterialCommunityIcons}
                  name={item.icon}
                  size="5"
                  color={
                    index === props.state.index ? "primary.500" : "gray.500"
                  }
                />
                <Text
                  fontWeight="500"
                  color={
                    index === props.state.index ? "primary.500" : "gray.700"
                  }
                >
                  {item.title}
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
