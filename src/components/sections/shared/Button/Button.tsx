"use client";
import Image from "next/image";
import styles from "./Button.module.css";
import { BarlowCondensedFont700 } from "@/app/fonts";
import ArrowIcon from "@/assets/images/arrowIcon.svg";

export const Button = (props) => {
  const handleButtonClick = () => {
    const section = document.getElementById(props.scrollTo);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`${styles.button} ${BarlowCondensedFont700.className}`}
    >
      zamów teraz
      <Image src={ArrowIcon} width={24} height={24} alt="" />
    </button>
  );
};
