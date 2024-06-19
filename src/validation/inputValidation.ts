interface IProps {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export const inputsValidation = (product:IProps) => {

  
  const {title,description,imageURL,price} = product;
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(imageURL);
  const error = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    };

  if(!title.trim() || title.length < 10 || title.length > 80) {
    error.title = "Title must be between 10 and 80 characters❌"
  } if(!description.trim() || description.length < 10 || description.length > 200) {
    error.description = "Description must be between 10 and 200 characters ❌"
  }

  if(!validUrl || !imageURL.trim()) {
    error.imageURL = "Invalid image url❌"
  }

  if(!price.trim() || isNaN(Number(product.price))){
    error.price = "Invalid price ❌";
  } 
  return error;
}