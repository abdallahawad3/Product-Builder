import MyButton from "./ui/MyButton";
import Image from "./Image";
import type { IProduct } from "../interfaces";
import { splitPrice, textSlicer } from "../utils";
import Circle from "./Circle";
interface IProps {
  product: IProduct;
  openDeleteModal: () => void;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToDelete: (id: string | undefined) => void;
  index: number;
  setProductToEditIdx: (idx: number) => void;
}

const ProductCard = ({
  product,
  index,
  setProductToEditIdx,
  setProductToEdit,
  openEditModal,
  openDeleteModal,
  setProductToDelete,
}: IProps) => {
  const onEdit = () => {
    setProductToEdit(product);
    setProductToEditIdx(index);
    openEditModal();
  };
  return (
    <div className="border rounded-md p-2">
      <Image
        imageUrl={product.imageURL}
        altText={textSlicer(product.title, 20)}
        className="mb-3 rounded-md"
      />
      <h3 className="text-md font-bold text-gray-600 ">
        {textSlicer(product.title, 20)}
      </h3>
      <p className="my-2 text-gray-900">
        {textSlicer(product.description, 30)}
      </p>

      <div className="flex items-center gap-1 my-2">
        {product.colors.map((color) => (
          <Circle color={color} key={color} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-blue-500 font-bold text-lg">
          ${splitPrice(product.price)}
        </span>
        <div className="flex justify-between items-center gap-1">
          <h1 className="uppercase text-sm font-bold">
            {product.category.name}
          </h1>
          <Image
            imageUrl={product.category.imageURL}
            altText="car-2"
            className="w-10 h-10 rounded-full "
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mt-2">
        <MyButton
          className="bg-blue-600 hover:bg-blue-700"
          width="w-full"
          onClick={() => {
            onEdit();
          }}
        >
          Edit
        </MyButton>
        <MyButton
          onClick={() => {
            openDeleteModal();
            setProductToDelete(product.id);
          }}
          className="bg-red-600 hover:bg-red-700"
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default ProductCard;
