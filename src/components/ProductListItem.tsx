import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Product } from '../Types/types'; 
import { Link } from 'expo-router';

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable className="flex-1 items-center bg-gray-100 rounded-lg p-3 max-w-[48%] m-1 shadow-md">
        <Image
          className="w-full rounded-md aspect-square"
          resizeMode="contain"
          source={{ uri: product.mainImage || defaultImage }}
        />
        <Text className="mt-2 text-sm font-bold text-center">{product.name}</Text>
        <Text className="my-1 text-xs text-gray-600">{product.brandName || 'Unknown Brand'}</Text>
        <Text className="text-lg font-semibold text-black">{product.price.amount} {product.price.currency}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
