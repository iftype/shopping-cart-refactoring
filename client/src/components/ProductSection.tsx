import type { Product } from "../domain/Product";

interface ProductSectionProps {
  products: Product[];
  handleDelete: (id: number) => Promise<void>;
}

export default function ProductSection({
  products,
  handleDelete,
}: ProductSectionProps) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} — {product.price.toLocaleString()}원
          <button onClick={() => handleDelete(product.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}
