export interface Product {
  id: number;
  name: string;
  price: number;
}

export const validateName = (name: string) => {
  return name.length !== 0 && name.length <= 100;
};

export const validatePrice = (price: number) => {
  return price >= 0;
};

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
