import { useEffect, useState } from "react";
import { postProduct, type Product } from "./domain/Product";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleAdd = async ({
    name,
    price,
  }: {
    name: string;
    price: string;
  }) => {
    const product = await postProduct({ name, price: Number(price) });
    setProducts((prev) => [...prev, product]);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, handleAdd, handleDelete };
};
