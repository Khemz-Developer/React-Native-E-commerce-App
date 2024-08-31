// types.ts
export interface Price {
    amount: string;
    currency: string;
}
  
export interface Product {
    id: string;
    SKU: string;
    name: string;
    brandName: string | null;
    mainImage: string;
    price: Price;
    sizes: string[];
    stockStatus: string;
    colour: string;
    description: string;
}
  