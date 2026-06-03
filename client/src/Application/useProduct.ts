import { useEffect, useState } from "react";
import type { Product, ProductRepository } from "../domain/Product";
import { productApi } from "../Infrastructure/ProductApi";

export const useProduct = (fetchApi: ProductRepository = productApi) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchApi.getAll().then(setProducts);
  }, [fetchApi]);

  const handleAdd = async ({
    name,
    price,
  }: {
    name: string;
    price: string;
  }) => {
    const product = await fetchApi.add({ name, price: Number(price) });
    setProducts((prev) => [...prev, product]);
  };

  const handleDelete = async (id: number) => {
    await fetchApi.remove(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, handleAdd, handleDelete };
};
