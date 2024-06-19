import ProductCard from "./components/ProductCard";
import { ProductList, formInputList } from "./data";
import MyButton from "./components/ui/MyButton";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import MyInput from "./components/ui/MyInput";
const App = () => {
  //** ⚙️⚙️ States ⚙️⚙️
  const [isOpen, setIsOpen] = useState(false);

  // ** 🌀🌀 Renders 🌀🌀 //
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderInputs = formInputList.map((input) => {
    return (
      <div key={input.id} className="w-full flex flex-col">
        <label
          className="text-sm/6 font-medium text-gray-700 capitalize"
          htmlFor={input.id}
        >
          {input.label}
        </label>
        <MyInput type={input.type} name={input.name} id={input.id} />
      </div>
    );
  });

  //** 🚀 Handler 🚀 */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <main className="container">
      <Modal close={close} isOpen={isOpen} modalTitle={"Add A New Product"}>
        <form className="space-y-2">
          {renderInputs}
          <div className="flex space-x-2">
            <MyButton className="bg-blue-600 hover:bg-blue-700">
              Submit
            </MyButton>
            <MyButton
              onClick={() => {
                close();
              }}
              className="bg-gray-400 hover:bg-gray-500"
            >
              Cancel
            </MyButton>
          </div>
        </form>
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
