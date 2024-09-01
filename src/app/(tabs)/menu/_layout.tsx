import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { Pressable } from "react-native";

export default function MenuStack() {
  //const pressed = true; // Declare the 'pressed' variable

  return (
    <Stack screenOptions={{
      headerRight: () => (
        <Link href="/cart" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome 
                name="shopping-cart"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>),
    }}>
      <Stack.Screen name="index" options={{title: "Menu",}}/>
      <Stack.Screen name="[id]" options={{ title: "Product Details" }} />
    </Stack>
  );
}
