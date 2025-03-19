import React, { useState } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import MainLayout from "./Components/MainLayout";
import ProductList from "./Components/Subcomponents/ProductList";
import ProductsForm from "./Components/Subcomponents/ProductsForm";
import { useProducts } from "../Logic/useProducts";

function App() {
  const { products, nextProductId, addProduct, deleteProduct, updateProduct } =
    useProducts();
  const [editingProduct, setEditingProduct] = useState(null);

  
  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

 
  const handleUpdateProduct = (updatedProduct) => {
    updateProduct(updatedProduct);
    setEditingProduct(null);
  };

  
  const clearEditing = () => {
    setEditingProduct(null);
  };

  return (
    <>
      <Header />
      <MainLayout>
        <ProductsForm
          onAddProduct={addProduct}
          onUpdateProduct={handleUpdateProduct}
          nextProductId={nextProductId}
          editingProduct={editingProduct}
          clearEditing={clearEditing}
        />
        <ProductList
          products={products}
          onDeleteProduct={deleteProduct}
          onEditProduct={handleEditProduct}
        />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
