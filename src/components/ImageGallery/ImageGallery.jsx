import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ items, onImgClick }) => {
  return (
    <div>
      <ul className={css.galleryList}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard onImgClick={onImgClick} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
