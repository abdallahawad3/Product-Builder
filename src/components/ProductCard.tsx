import MyButton from "./ui/MyButton";
import Image from "./Image";
import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
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
        {textSlicer(product.description, 50)}
      </p>

      <div className="flex items-center gap-1 my-2">
        <span
          className={"h-5 w-5 bg-red-500 rounded-full block cursor-pointer"}
        />
        <span
          className={"h-5 w-5 bg-blue-500 rounded-full block cursor-pointer"}
        />
        <span className="h-5 w-5 bg-emerald-500 rounded-full block cursor-pointer" />
      </div>

      <div className="flex justify-between items-center">
        <span>${product.price}</span>
        <div className="flex justify-between items-center gap-1">
          <Image
            imageUrl={product.category.imageURL}
            altText="car-2"
            className="w-10 h-10 rounded-full "
          />
          <h1 className="capitalize text-md font-bold">
            {product.category.name}
          </h1>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mt-2">
        <MyButton className="bg-blue-600 hover:bg-blue-700" width="w-full">
          Edit
        </MyButton>
        <MyButton className="bg-red-600 hover:bg-red-700">Delete</MyButton>
      </div>
    </div>
  );
};

export default ProductCard;
