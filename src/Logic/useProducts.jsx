import { useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [nextProductId, setNextProductId] = useState(1);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    setNextProductId((prev) => prev + 1);
  };


  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };


  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };


  return {
    products,
    nextProductId,
    addProduct,
    deleteProduct,
    updateProduct,
  };
}
