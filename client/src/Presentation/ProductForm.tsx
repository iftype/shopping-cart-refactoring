import { useState } from "react";
import type { useProductResult } from "../Application/useProduct";

type ProductFormProps = Pick<useProductResult, "handleAdd">;

export const ProductForm = ({ handleAdd }: ProductFormProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    setError("");

    const result = await handleAdd({ name, price });
    if (result.status === "error") {
      setError(result.msg);
    }
    setName("");
    setPrice("");
  };

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="상품명"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="가격"
        type="number"
      />
      <button onClick={onSubmit}>추가</button>
      {error && <p>{error}</p>}
    </>
  );
};
