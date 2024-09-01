
import { FlatList, Pressable, Text, View, ScrollView } from "react-native";
import React from "react";
import { useCart } from "./../providers/CartProvider";
import CartListItems from "../components/CartListItems";

export default function Cart() {
  const { items, total } = useCart();

  return (
    <View className="flex-1 bg-white">
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => <CartListItems CartItem={item} />}
          contentContainerStyle={{ padding: 10, gap: 10 }}
          // Prevent FlatList from interfering with ScrollView
          scrollEnabled={false} 
        />

        <Text className="my-5 text-lg font-semibold text-center">
          Total: GBP {total}
        </Text>
        <Pressable
          onPress={() => alert("Checkout")}
          className="flex items-center justify-center p-1 m-5 mt-3 bg-blue-400 rounded-md"
        >
          <Text className="text-lg font-semibold text-center text-white">
            Checkout
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
