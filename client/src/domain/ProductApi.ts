import type { Product } from "./Product";

export const postProduct = async ({
  name,
  price,
}: Pick<Product, "name" | "price">) => {
  const res = await fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price }),
  });
  return res.json();
};

export const deleteProduct = async (id: Pick<Product, "id">) => {
  await fetch(`/products/${id}`, { method: "DELETE" });
};
