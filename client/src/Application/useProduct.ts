import { useEffect, useState } from "react";
import {
  validateName,
  validatePrice,
  type Product,
  type ProductRepository,
} from "../domain/Product";
import { productApi } from "../Infrastructure/ProductApi";

export type ProductInputField = {
  name: string;
  price: string;
};

type ProductError = { status: "success" } | { status: "error"; msg: string };

export interface useProductResult {
  products: Product[];
  handleAdd: ({ name, price }: ProductInputField) => Promise<ProductError>;
  handleDelete: (id: number) => Promise<void>;
}

export const useProduct = (
  fetchApi: ProductRepository = productApi,
): useProductResult => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchApi.getAll().then(setProducts);
  }, [fetchApi]);

  const handleAdd = async ({
    name,
    price,
  }: ProductInputField): Promise<ProductError> => {
    if (!validateName(name)) {
      return { status: "error", msg: "상품명은 1~100자여야 합니다" };
    }
    if (!validatePrice(Number(price))) {
      return { status: "error", msg: "가격은 0보다 커야 합니다" };
    }
    const product = await fetchApi.add({ name, price: Number(price) });
    setProducts((prev) => [...prev, product]);
    return { status: "success" };
  };

  const handleDelete = async (id: number): Promise<void> => {
    await fetchApi.remove(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, handleAdd, handleDelete };
};
