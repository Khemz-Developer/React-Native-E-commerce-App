// types.ts
export type Price ={
    amount: string;
    currency: string;
}
  
export type Product = {
    id: string;
    SKU: string;
    name: string;
    brandName: string | null;
    mainImage: string;
    price:Price;
    sizes: string[];
    stockStatus: string;
    colour: string;
    description: string;
}

export type ShoesSize = '8'|'9'|'10'|'11';

export type CartItem = {
    id: string;
    product: Product;
    product_id: number;
    size: ShoesSize;
    quantity: number;
  };