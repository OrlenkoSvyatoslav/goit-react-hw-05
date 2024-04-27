const ImageCard = ({
  item: {
    alt_description,
    urls: { small, regular },
  },
  onImgClick,
}) => {
  return (
    <div>
      <div>
        <img
          src={small}
          alt={alt_description}
          onClick={() => onImgClick(regular)}
          width={320}
          height={200}
        />
      </div>
    </div>
  );
};

export default ImageCard;
