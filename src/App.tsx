import Button from "./components/ui/Button";
import ProductCard from "./components/ProductCard";
import { ProductList } from "./data";
const App = () => {
  // ** Renders //

  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <div className=" my-5 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl mb-2 sm:mb-0 font-bold text-blue-600">
          Build A New Product
        </h1>
        <Button className="bg-blue-600 hover:bg-blue-700" width="w-fit">
          Build New Product
        </Button>
      </div>
      <div className="mb-10 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
