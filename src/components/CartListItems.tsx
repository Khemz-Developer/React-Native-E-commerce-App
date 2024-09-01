import { View, Text, Image } from "react-native";
import React from "react";
import { CartItem } from "../Types/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useCart } from "../providers/CartProvider";

type CartListItemsProps = {
  CartItem: CartItem;
};

const CartListItems = ({ CartItem }: CartListItemsProps) => {
  const { amount, currency } = CartItem.product.price;
  const { updateQuantity } = useCart();

  return (
    <View className="flex-row items-center justify-between p-2 border border-gray-300 rounded-lg">
      <Image
        source={{ uri: CartItem.product.mainImage || defaultImage }}
        className="self-center w-20 h-20 mr-2"
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="mb-1 text-base font-bold">{CartItem.product.name}</Text>
        <View className="flex-row gap-1">
          <View className="flex-1">
            <Text className="mb-1 text-sm font-semibold">
              {CartItem.product.brandName}
            </Text>
            <Text className="mb-1 font-medium text-gray-600">
              {currency} {amount}
            </Text>
            <Text className="text-gray-600">Size: {CartItem.size}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center gap-2 my-2">
        <FontAwesome
          onPress={() => updateQuantity(CartItem.id, -1)}
          name="minus"
          color="gray"
          className="p-1"
          size={15}
        />
        <Text className="text-lg font-bold">{CartItem.quantity}</Text>
        <FontAwesome 
          onPress={() => updateQuantity(CartItem.id, 1)}
          name="plus"
          color="gray"
          className="p-1 "
          size={15}
          
        />
      </View>
    </View>
  );
};

export default CartListItems;
