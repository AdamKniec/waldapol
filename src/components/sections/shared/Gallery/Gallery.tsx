import { Gallery, Item } from "react-photoswipe-gallery";

interface Image {
  original: string;
  thumbnail: string;
  alt: string;
  customWidthThumbnail: number;
  customHeightThumbnail: number;
  customWidthImage: number;
  customHeightImage: number;
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
            width={image.customWidthImage || 800}
            height={image.customHeightImage || 500}
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                alt={image.alt}
                src={image.original}
                width={image.customWidthThumbnail || 300}
                height={image.customHeightThumbnail || 189.87}
              />
            )}
          </Item>
        </div>
      </Gallery>
    );
  });
};
