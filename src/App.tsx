import { v4 as uuid } from "uuid";
import ProductCard from "./components/ProductCard";
import { Category, ProductList, colors, formInputList } from "./data";
import MyButton from "./components/ui/MyButton";
import Modal from "./components/ui/Modal";
import { useState, type ChangeEvent, type FormEvent } from "react";
import MyInput from "./components/ui/MyInput";
import type { IProduct } from "./interfaces";
import { inputsValidation } from "./validation/inputValidation";
import ErrorMessage from "./components/ErrorMessage";
import Circle from "./components/Circle";
import { XCircleIcon } from "@heroicons/react/16/solid";
import SelectMenu from "./components/ui/SelectMenu";
import type { TProductNames } from "./types";

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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [errorMsg, setErrorMsg] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(Category[0]);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);

  //** 🚀 Handler 🚀 */
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  function openEditModal() {
    setIsEditOpen(true);
  }

  function colsEditModal() {
    setIsEditOpen(false);
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setErrorMsg({ ...errorMsg, [name]: "" });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
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

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: selectedColor,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    close();
  };

  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = inputsValidation(productToEdit);
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    setErrorMsg(errors);
    if (!hasErrorMsg) {
      return;
    }
    const updatedProduct = [...products];
    updatedProduct[productToEditIdx] = {
      ...productToEdit,
      colors: selectedColor.concat(productToEdit.colors),
    };
    setProducts(updatedProduct);
    colsEditModal();
  };

  const onClose = () => {
    setProduct(defaultProductObj);
    setSelectedColor([]);
    setErrorMsg({
      description: "",
      imageURL: "",
      price: "",
      title: "",
    });
    close();
    colsEditModal();
  };

  // ** 🌀🌀 Renders 🌀🌀 //
  const renderProductList = products.map((product, idx) => (
    <ProductCard
      index={idx}
      setProductToEditIdx={setProductToEditIdx}
      openEditModal={openEditModal}
      setProductToEdit={setProductToEdit}
      key={product.id}
      product={product}
    />
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
          if (productToEdit.colors.includes(color)) {
            setSelectedColor((prev) => prev.filter((item) => item !== color));
            return;
          }
          setSelectedColor((prev) => [...prev, color]);
        }}
      />
    );
  });

  const renderEditProduct = (
    id: string,
    label: string,
    name: TProductNames
  ) => {
    return (
      <div className="w-full flex flex-col">
        <label
          className="text-sm/6 font-medium text-gray-700 capitalize"
          htmlFor={id}
        >
          {label}
        </label>
        <MyInput
          name={name}
          id={id}
          value={productToEdit[name]}
          onChange={(e) => {
            onChangeEditHandler(e);
          }}
        />
        <ErrorMessage msg={errorMsg[name]} />
      </div>
    );
  };

  return (
    <main className="container">
      {/* Add A New Product 🌀 */}
      <Modal close={close} isOpen={isOpen} modalTitle={"Add A New Product 🌀"}>
        <form className="space-y-2" onSubmit={onSubmitHandler}>
          {renderInputs}
          <SelectMenu
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
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

      {/* Edit the product ✒️*/}
      <Modal
        close={colsEditModal}
        isOpen={isEditOpen}
        modalTitle={"Edit the product ✒️"}
      >
        <form className="space-y-2" onSubmit={onSubmitEditHandler}>
          {renderEditProduct("title", "Product Title", "title")}
          {renderEditProduct(
            "description",
            "Product Description",
            "description"
          )}
          {renderEditProduct("imageURL", "Product imageURL", "imageURL")}
          {renderEditProduct("price", "Product Price", "price")}

          <SelectMenu
            selected={productToEdit.category}
            setSelected={(val) =>
              setProductToEdit({ ...productToEdit, category: val })
            }
          />
          <div className="flex items-center justify-start space-x-1 py-[5px]">
            {renderColors}
          </div>
          <div className="flex items-center gap-2 flex-wrap text-white">
            {selectedColor.concat(productToEdit.colors).map((ele) => {
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
