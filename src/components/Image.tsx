interface IProps {
  imageUrl: string;
  altText: string;
  className?: string;
}

const Image = ({ altText, imageUrl, className }: IProps) => {
  return <img src={imageUrl} alt={altText} className={className} />;
};

export default Image;
