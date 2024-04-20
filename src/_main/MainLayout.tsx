"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "./_component/Navbar";
import Search from "./_component/Search";
import { BunJang, Junggo } from "./_lib/Crawling";
import styles from "./main.module.css";
import { IDataProps } from "./type/types";
import { DateUtils } from "@/utils/dateUtils";
import { formatPrice } from "@/utils/formatPrice";
import Loading from "./_component/Loading";

type IObjProps = IDataProps & { [key in string]: string | boolean | null | [] | number };

export default function MainLayout() {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IObjProps[]>([]);
  const currentRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (searchValue: string, pageNum = 1) => {
    setLoading(true);
    try {
      if (pageNum === 1) {
        setData([]);
      }
      const bunjangData = await BunJang({ value: searchValue, num: pageNum - 1 });
      const jungoData = await Junggo({ value: searchValue, num: pageNum });

      const bunjangList = bunjangData.list.map((el: IObjProps) => ({
        name: el.name,
        link: `https://m.bunjang.co.kr/products/${el.pid}`,
        img: el.product_image,
        region: el.location,
        price: formatPrice(el.price),
        time: DateUtils(el.update_time),
      }));

      const jungoList = jungoData.data.items.map((el: IObjProps) => ({
        name: el.title,
        link: `https://web.joongna.com/product/${el.seq}`,
        img: el.url,
        region: el.locationNames,
        price: formatPrice(el.price),
        time: el.sortDate,
      }));

      const newItems = [...bunjangList, ...jungoList];
      setData((prev) =>
        [...prev, ...newItems].sort((a, b) => {
          const dateA = new Date(a.time);
          const dateB = new Date(b.time);

          return dateB.getTime() - dateA.getTime();
        }),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const totalHeight = document.documentElement.offsetHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    if (scrollPercentage >= 80 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!loading) {
      handleSearch(searchValue, page);
    }
  }, [page, searchValue]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.Container} ref={currentRef}>
      {loading && <Loading />}
      <Navbar />
      <Search onSearch={(value) => setSearchValue(value)} />
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
