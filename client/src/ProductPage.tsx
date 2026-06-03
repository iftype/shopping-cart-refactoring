import { ProductForm } from "./components/ProductForm";
import ProductSection from "./components/ProductSection";
import { useProduct } from "./useProduct";

export const ProductPage = () => {
  const { products, handleAdd, handleDelete } = useProduct();
  return (
    <div>
      <ProductForm handleAdd={handleAdd} />
      <ProductSection products={products} handleDelete={handleDelete} />
    </div>
  );
};
