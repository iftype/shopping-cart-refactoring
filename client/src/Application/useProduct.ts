import { useEffect, useState } from "react";
import type { Product, ProductRepository } from "../domain/Product";
import { productApi } from "../Infrastructure/ProductApi";

export type ProductInputField = {
  name: string;
  price: string;
};
export interface useProductResult {
  products: Product[];
  handleAdd: ({ name, price }: ProductInputField) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
}

export const useProduct = (
  fetchApi: ProductRepository = productApi,
): useProductResult => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchApi.getAll().then(setProducts);
  }, [fetchApi]);

  const handleAdd = async ({ name, price }: ProductInputField) => {
    const product = await fetchApi.add({ name, price: Number(price) });
    setProducts((prev) => [...prev, product]);
  };

  const handleDelete = async (id: number) => {
    await fetchApi.remove(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, handleAdd, handleDelete };
};
