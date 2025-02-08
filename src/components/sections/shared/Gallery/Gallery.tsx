import { Gallery, Item } from "react-photoswipe-gallery";

interface Image {
  original: string;
  thumbnail: string;
  alt: string;
}

interface ImagesGalleryProps {
  imagesData: Image[];
}

export const ImagesGallery = (props: ImagesGalleryProps) => {
  return props.imagesData.map((image, index) => {
    return (
      <Gallery key={index}>
        <div style={{ cursor: "pointer" }}>
          <Item
            original={image.original}
            thumbnail={image.thumbnail}
            width="800"
            height="500"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                alt={image.alt}
                src={image.original}
                width={300}
                height={189.87}
              />
            )}
          </Item>
        </div>
      </Gallery>
    );
  });
};
