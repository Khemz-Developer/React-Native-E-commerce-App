import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Button,
  ScrollView,
} from "react-native";

import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useProducts } from "@/src/Hooks/useProduct";
import { Product } from "../../../Types/types";
import { ShoesSize } from "../../../Types/types";
import { useCart } from "../../../providers/CartProvider";


const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { products, loading } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<ShoesSize | null>("8");

  const { addItem } = useCart();
  const router = useRouter();

  const sizes: ShoesSize[] = ["8", "9", "10", "11"];

  useEffect(() => {
    if (products && id) {
      const foundProduct = products.find((item) => item.id === id);
      setProduct(foundProduct || null);
    }
  }, [products, id]);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found.</Text>
      </View>
    );
  }

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.mainImage }}
        className="w-full mb-4 h-72"
        resizeMode="contain"
      />
      <Text className="mb-2 text-xl font-bold">{product.name}</Text>
      <Text className="mb-2 text-base text-gray-600">
        {product.brandName || "Unknown Brand"}
      </Text>
      <Text className="mb-2 text-lg font-semibold text-black">
        {product.price.currency} {product.price.amount}
      </Text>
      <Text className="mb-2 text-sm text-justify text-gray-700">
        {product.description}
      </Text>
      <Text className="mb-2 text-sm text-green-700 ">
        Stock Status: {product.stockStatus}
      </Text>
      <Text className="mb-2 text-sm text-gray-700">
        Colour: {product.colour}
      </Text>
      <Text className="mb-2 text-sm font-medium">Select Size:</Text>
      <View className="flex-row justify-around my-3">
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              selectedSize === size ? "bg-gray-300" : "bg-white"
            }`}
            key={size}
          >
            <Text
              className={`${
                selectedSize === size ? "text-black" : "text-gray-500"
              } text-lg font-medium`}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Pressable
        onPress={addToCart}
        className={`flex items-center justify-center p-1 mt-3 mb-5 rounded-md ${
          product.stockStatus === "OUT OF STOCK" ? "bg-red-300" : "bg-blue-400"
        }`}
        disabled={product.stockStatus === "OUT OF STOCK"} // Disable the button if out of stock
      >
        <Text
          className={`text-lg font-semibold text-center ${
            product.stockStatus === "OUT OF STOCK"
              ? "text-black"
              : "text-white"
          }`}
        >
          {product.stockStatus === "OUT OF STOCK"
            ? "Out of Stock"
            : "Add to Cart"}
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
