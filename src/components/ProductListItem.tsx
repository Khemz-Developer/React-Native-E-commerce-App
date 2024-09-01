
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
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
    <Pressable style={styles.card}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: product.mainImage || defaultImage }}
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brandName || 'Unknown Brand'}</Text>
      <Text style={styles.price}>
        {product.price.amount} {product.price.currency}
      </Text>
    </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  brand: {
    fontSize: 12,
    color: '#555',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
