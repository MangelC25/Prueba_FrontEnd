import Footer from "./Common/Footer";
import Header from "./Common/Header";
import MainLayout from "./Components/MainLayout";
import ProductsForm from "./Components/Subcomponents/ProductsForm";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <ProductsForm />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
