import { useProduct } from "../Application/useProduct";
import { ProductForm } from "./ProductForm";
import ProductSection from "./ProductSection";

export const ProductPage = () => {
  const { products, handleAdd, handleDelete } = useProduct();
  return (
    <div>
      <ProductForm handleAdd={handleAdd} />
      <ProductSection products={products} handleDelete={handleDelete} />
    </div>
  );
};
