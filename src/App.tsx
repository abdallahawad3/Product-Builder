import ProductCard from "./components/ProductCard";
import { ProductList } from "./data";
import MyButton from "./components/ui/MyButton";
import Modal from "./components/ui/Modal";
import { useState } from "react";
const App = () => {
  //** ⚙️⚙️ States ⚙️⚙️
  const [isOpen, setIsOpen] = useState(false);

  //** 🚀 Handler 🚀 */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  // ** 🌀🌀 Renders 🌀🌀 //
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <Modal close={close} isOpen={isOpen} modalTitle={"Add New Product"}>
        <div className="flex space-x-1">
          <MyButton className="bg-blue-600 hover:bg-blue-700">Submit</MyButton>
          <MyButton
            onClick={() => {
              close();
            }}
            className="bg-gray-400 hover:bg-gray-500"
          >
            Cancel
          </MyButton>
        </div>
      </Modal>
      <div className=" my-5 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl mb-2 sm:mb-0 font-bold text-blue-600">
          Build A New Product
        </h1>
        <MyButton
          className="bg-blue-600 hover:bg-blue-700"
          width="w-fit"
          onClick={() => {
            open();
          }}
        >
          Build New Product
        </MyButton>
      </div>
      <div className="mb-10 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
