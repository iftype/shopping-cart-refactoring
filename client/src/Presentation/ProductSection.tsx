import type { useProductResult } from "../Application/useProduct";

type ProductSectionProps = Pick<useProductResult, "products" | "handleDelete">;

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
