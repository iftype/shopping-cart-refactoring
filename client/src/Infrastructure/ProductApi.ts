import type { ProductRepository } from "../domain/Product";

export const productApi: ProductRepository = {
  getAll: async () => {
    const res = await fetch("/products");
    return res.json();
  },
  add: async ({ name, price }) => {
    const res = await fetch("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    });
    return res.json();
  },
  remove: async (id) => {
    await fetch(`/products/${id}`, { method: "DELETE" });
  },
};
