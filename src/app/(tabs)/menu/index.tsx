// src/screens/TabOneScreen.tsx
import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import ProductListItem from '@/src/components/ProductListItem';
import { useProducts } from '../../../Hooks/useProduct'; // Correct the import path if needed

export default function TabOneScreen() {
  const { products, loading, error } = useProducts(); // Correct usage of the hook

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View className='flex-1 p-2.5 bg-white '>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 5, padding: 5 }}
        columnWrapperStyle={{ gap: 5 }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', 
  },
});
