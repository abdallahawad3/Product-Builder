import ProductCard from "./components/ProductCard";
import { ProductList, colors, formInputList } from "./data";
import MyButton from "./components/ui/MyButton";
import Modal from "./components/ui/Modal";
import { useState, type ChangeEvent, type FormEvent } from "react";
import MyInput from "./components/ui/MyInput";
import type { IProduct } from "./interfaces";
import { inputsValidation } from "./validation/inputValidation";
import ErrorMessage from "./components/ErrorMessage";
import Circle from "./components/Circle";
import { XCircleIcon } from "@heroicons/react/16/solid";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      imageURL: "",
      name: "",
    },
  };
  //** ⚙️⚙️ States ⚙️⚙️
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errorMsg, setErrorMsg] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  //** 🚀 Handler 🚀 */
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrorMsg({ ...errorMsg, [name]: "" });
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = inputsValidation(product);

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    setErrorMsg(errors);
    if (!hasErrorMsg) {
      return;
    }
  };

  const onClose = () => {
    setProduct(defaultProductObj);
    setSelectedColor([]);
    close();
  };

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
        <MyInput
          type={input.type}
          name={input.name}
          id={input.id}
          value={product[input.name]}
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
        <ErrorMessage msg={errorMsg[input.name]} />
      </div>
    );
  });

  const renderColors = colors.map((color) => {
    return (
      <Circle
        color={color}
        key={color}
        onClick={() => {
          if (selectedColor.includes(color)) {
            setSelectedColor((prev) => prev.filter((item) => item !== color));
            return;
          }
          setSelectedColor((prev) => [...prev, color]);
        }}
      />
    );
  });

  return (
    <main className="container">
      <Modal close={close} isOpen={isOpen} modalTitle={"Add A New Product"}>
        <form className="space-y-2" onSubmit={onSubmitHandler}>
          {renderInputs}

          <div className="flex items-center justify-start space-x-1 py-[5px]">
            {renderColors}
          </div>
          <div className="flex items-center gap-2 flex-wrap text-white">
            {selectedColor.map((ele) => {
              return (
                <span
                  key={ele}
                  className="py-1 px-1 rounded-md flex items-center gap-1"
                  style={{ background: ele }}
                >
                  {ele}
                  <XCircleIcon
                    style={{
                      width: "20px",
                      background: ele,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelectedColor((prev) =>
                        prev.filter((item) => item !== ele)
                      );
                    }}
                  />
                </span>
              );
            })}
          </div>
          <div className="flex space-x-2">
            <MyButton className="bg-blue-600 hover:bg-blue-700">
              Submit
            </MyButton>
            <MyButton
              type="button"
              onClick={onClose}
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
