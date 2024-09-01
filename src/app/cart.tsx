import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCart } from "./../providers/CartProvider";
import CartListItems from "../components/CartListItems";

export default function cart() {
  const { items, total } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItems CartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

      <Text style={styles.total}>Total: GBP {total}</Text>
      <Button title="Checkout" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
  },
});
