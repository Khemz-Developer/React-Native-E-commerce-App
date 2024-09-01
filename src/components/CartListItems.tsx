import { View, Text, Image } from "react-native";
import React from "react";
import { CartItem } from "../Types/types";
import { StyleSheet } from "react-native";
import { defaultImage } from "./ProductListItem";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCart } from "../providers/CartProvider";

type CartListItemsProps = {
  CartItem: CartItem;
};

const CartListItems = ({ CartItem }: CartListItemsProps) => {
  const { amount, currency } = CartItem.product.price;
  const { updateQuantity } = useCart();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: CartItem.product.mainImage || defaultImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{CartItem.product.name}</Text>
        <View style={styles.subtitleContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subtitle}>{CartItem.product.brandName}</Text>
            <Text style={styles.price}>
              {currency} {amount}
            </Text>
            <Text>Size: {CartItem.size}</Text>
          </View>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <FontAwesome
          onPress={() => updateQuantity(CartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />

        <Text style={styles.quantity}>{CartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(CartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
    // color: Colors.light.tint,
  },
  subtitleContainer: {
    flexDirection: "row",
    gap: 5,
  },
  quantitySelector: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  quantity: {
    fontWeight: "500",
    fontSize: 18,
  },
  price: {
    //color: Colors.light.tint,
    fontWeight: "500",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    //color: Colors.light.tint,
  },
});

export default CartListItems;
