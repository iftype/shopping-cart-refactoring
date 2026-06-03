import { useEffect, useState } from "react";
import { type Product } from "./domain/Product";
import { deleteProduct, postProduct } from "./domain/ProductApi";

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
    await deleteProduct({ id });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, handleAdd, handleDelete };
};
