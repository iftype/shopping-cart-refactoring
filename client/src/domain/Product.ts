export interface Product {
  id: number;
  name: string;
  price: number;
}

export const validateName = (name: string) => {
  return name.length !== 0 && name.length <= 100;
};

export const validatePrice = (price: number) => {
  return price > 0;
};

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  add(product: Pick<Product, "name" | "price">): Promise<Product>;
  remove(id: number): Promise<void>;
}
