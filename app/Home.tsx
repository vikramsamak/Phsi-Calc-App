import React from "react";
import {
  ScrollView,
  Box,
  Heading,
  Text,
  Icon,
  Pressable,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { drawerItems } from "@/constants/DrawerConfig";
import { router } from "expo-router";
import { features } from "@/constants/Constants";

export default function Home() {
  return (
    <ScrollView bg="white">
      <Box p={4}>
        <Heading size="xl" color="primary.500" mb={4}>
          Welcome to Physi-Calc App
        </Heading>
        <Text fontSize="md" color="gray.500" mb={4}>
          Perform physics calculations with ease.
        </Text>

        <VStack space={4} width="100%" mt={4}>
          <Heading size="md" color="primary.500" mb={2}>
            Features
          </Heading>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="gray.100"
              p={4}
              borderRadius="md"
              flexDirection="row"
              alignItems="center"
            >
              <Icon
                as={Ionicons}
                name={feature.icon}
                size="lg"
                color="primary.500"
                mr={4}
              />
              <VStack flex={1}>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="primary.500"
                  mb={2}
                >
                  {feature.title}
                </Text>
                <Text fontSize="md" color="gray.700">
                  {feature.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </VStack>

        <VStack space={4} width="100%" mt={4}>
          <Heading size="md" color="primary.500" mb={2}>
            Topics
          </Heading>
          {drawerItems.map(
            (item, index) =>
              item.name !== "Home" &&
              item.name !== "Settings" && (
                <Pressable
                  key={index}
                  onPress={() => router.push(item.name)}
                  bg="gray.100"
                  p={4}
                  borderRadius="md"
                  width="100%"
                  alignItems="center"
                  flexDirection="row"
                >
                  <Icon
                    as={MaterialCommunityIcons}
                    name={item.icon}
                    size="lg"
                    color="primary.500"
                    mr={4}
                  />
                  <Text fontSize="lg" fontWeight="bold" color="primary.500">
                    {item.title}
                  </Text>
                </Pressable>
              )
          )}
        </VStack>
      </Box>
    </ScrollView>
  );
}
