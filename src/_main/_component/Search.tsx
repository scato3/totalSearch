"use client";

import styles from "./search.module.css";
import Image from "next/image";
import searchImg from "../../../public/search.svg";
import { useState } from "react";
import { ISearchProps } from "../type/types";

export default function Search({ onSearch }: ISearchProps) {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(searchItem);
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          placeholder="찾고 싶은 물품을 검색하세요"
          className={styles.searchInput}
          maxLength={20}
          value={searchItem}
          onChange={handleChange}
        />
        <div onClick={handleSubmit}>
          <Image src={searchImg} width={20} height={20} alt="검색 이미지" className={styles.img} />
        </div>
      </div>
    </>
  );
}
