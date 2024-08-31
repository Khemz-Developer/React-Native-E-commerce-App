// hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { Product } from '../Types/types';

const API_URL = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (result.result === 'success') {
          setProducts(result.data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('An error occurred while fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
