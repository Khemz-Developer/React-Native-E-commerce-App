// import { View, Text, Image, StyleSheet, ActivityIndicator, Pressable, Button,ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { useLocalSearchParams } from 'expo-router';
// import { useProducts } from '@/src/Hooks/useProduct'; // Assuming useProducts fetches and returns the product list
// import { Product} from '@/src/Types/types';
// import { ShoesSize } from '@/src/Types/types';

// const ProductDetailsScreen = () => {
//   const { id } = useLocalSearchParams<{ id: string }>(); // Extract the product id from the route params
//   const { products, loading } = useProducts(); // Get products from the custom hook
//   const [product, setProduct] = useState(null);

//   const [selectedSize, setSelectedSize] = useState<ShoesSize | null>('8 ');

//   const sizes: ShoesSize[] = ['8', '9', '10', '11'];

//   // Find the product by ID once the products are loaded
//   useEffect(() => {
//     if (products && id) {
//       const foundProduct = products.find((item) => item.id === id);
//       setProduct(foundProduct);
//     }
//   }, [products, id]);

//   // Show loading indicator while data is being fetched
//   if (loading) {
//     return <ActivityIndicator size="large" style={styles.loading} />;
//   }

//   // Handle the case when the product is not found
//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Product not found.</Text>
//       </View>
//     );
//   }

  
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: product.mainImage }}
//         style={styles.image}
//         resizeMode="contain"
//       />
//       <Text style={styles.title}>{product.name}</Text>
//       <Text style={styles.brand}>{product.brandName || 'Unknown Brand'}</Text>
//       <Text style={styles.price}>
//         {product.price.currency} {product.price.amount}
//       </Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.stockStatus}>
//         Stock Status: {product.stockStatus}
//       </Text>
//       <Text style={styles.colour}>Colour: {product.colour}</Text>
//       <Text style={styles.sizes}>Select Size:</Text>
//       <View style={styles.sizes}>
//         {sizes.map((size)  => (
//           <Pressable onPress={() => setSelectedSize(size)}
//             style={[
//               styles.size,
//               {
//                 backgroundColor: selectedSize === size ? "#e3e3e3" : "white",
//               },
//             ]}
//             key={size}
//           >
//             <Text
//               style={[
//                 styles.sizeText,
//                 {
//                   color: selectedSize === size ? "black" : "gray",
//                 },
//               ]}
//             >
//               {size}
//             </Text>
//           </Pressable>
//         ))}
//       </View>
//       <Button className="p-10 m-10 text-left" title="Add to Cart" onPress={() => console.log("Add to Cart")} />
//     </View>
//   );
// };

// export default ProductDetailsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   brand: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 18,
//     color: '#000',
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 14,
//     color: '#444',
//     marginBottom: 8,
//   },
//   stockStatus: {
//     fontSize: 14,
//     color: '#008000',
//     marginBottom: 8,
//   },
//   colour: {
//     fontSize: 14,
//     marginBottom: 8,
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     textAlign: 'center',
//   },
//   loading: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sizes: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 10,
//   },
//   size: {
//     backgroundColor: "#e3e3e3",
//     width: 50,
//     aspectRatio: 1,
//     borderRadius: 25,
//     alignItems: "center", 
//     justifyContent: "center",
//   },
//   sizeText: {
//     fontSize: 20,
//     fontWeight: "500",
//   },
// });



// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { useLocalSearchParams } from 'expo-router'

// // const ProductDetailsScreen = () => {

// //   const {id} = useLocalSearchParams();
// //   return (
// //     <View>
// //       <Text>ProductDetails id:{id}</Text>
// //     </View>
// //   )
// // }

// // export default ProductDetailsScreen


import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Button,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useProducts } from '@/src/Hooks/useProduct';
import { Product } from '@/src/Types/types';
import { ShoesSize } from '@/src/Types/types';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { products, loading } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<ShoesSize | null>('8');

  const sizes: ShoesSize[] = ['8', '9', '10', '11'];

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.mainImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.brand}>{product.brandName || 'Unknown Brand'}</Text>
      <Text style={styles.price}>
        {product.price.currency} {product.price.amount}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.stockStatus}>
        Stock Status: {product.stockStatus}
      </Text>
      <Text style={styles.colour}>Colour: {product.colour}</Text>
      <Text style={styles.sizes}>Select Size:</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? '#e3e3e3' : 'white',
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? 'black' : 'gray',
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Button
        className="p-10 m-10 text-left"
        title="Add to Cart"
        onPress={() => console.log('Add to Cart')}
      />
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  stockStatus: {
    fontSize: 14,
    color: '#008000',
    marginBottom: 8,
  },
  colour: {
    fontSize: 14,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: '#e3e3e3',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
