import { useState } from "react";
import { validateName, validatePrice } from "../domain/Product";
import type { useProductResult } from "../Application/useProduct";

type ProductFormProps = Pick<useProductResult, "handleAdd">;

export const ProductForm = ({ handleAdd }: ProductFormProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    if (!validateName(name)) {
      setError("상품명은 1~100자여야 합니다");
      return;
    }
    if (!validatePrice(Number(price))) {
      setError("가격은 0보다 커야 합니다");
      return;
    }
    setError("");

    await handleAdd({ name, price });
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
