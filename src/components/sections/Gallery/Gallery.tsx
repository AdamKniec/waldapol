"use client";

import styles from "./Gallery.module.css";
import { BarlowCondensedFont800 } from "@/app/fonts";
import { useState } from "react";
import { ImagesGallery } from "../shared/Gallery/Gallery";
import { galleryData } from "./galleryData";

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof galleryData>("daf");

  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.header}>Galeria</h2>
      <div>
        <ul
          className={`${styles.categoriesList} ${BarlowCondensedFont800.className}`}
        >
          <li onClick={() => setSelectedCategory("daf")}>DAF</li>
          <li onClick={() => setSelectedCategory("iveco")}>IVECO</li>
          <li onClick={() => setSelectedCategory("man")}>MAN</li>
          <li onClick={() => setSelectedCategory("benz")}>MERCEDES-BENZ</li>
          <li onClick={() => setSelectedCategory("scania")}>SCANIA</li>
          <li onClick={() => setSelectedCategory("volvo")}>VOLVO</li>
        </ul>
      </div>
      <div className={styles.galleryWrapper}>
        <ImagesGallery imagesData={galleryData[selectedCategory]} />
      </div>
    </section>
  );
};
