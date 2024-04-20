"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "./_component/Navbar";
import Search from "./_component/Search";
import { BunJang, Junggo } from "./_lib/Crawling";
import styles from "./main.module.css";
import { IDataProps } from "./type/types";
import { DateUtils } from "@/utils/dateUtils";
import { formatPrice } from "@/utils/formatPrice";
import Loading from "./_component/Loading";
import Card from "./_component/Card";

type IObjProps = IDataProps & { [key in string]: string | boolean | null | [] | number };

export default function MainLayout() {
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IObjProps[]>([]);
  const [prevValue, setPrevValue] = useState<string>("");

  const handleSearch = async (searchValue: string) => {
    setLoading(true);

    try {
      if (!searchValue) {
        setData([]);
        setPage(1);
        setLoading(false);
        return;
      }

      const bunjangData = await BunJang({ value: searchValue, num: page - 1 });
      const jungoData = await Junggo({ value: searchValue, num: page });

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
      setTimeout(() => setLoading(false), 1500);
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
      handleSearch(searchValue);
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [searchValue]);

  return (
    <div className={styles.Container}>
      {loading && <Loading />}
      <Navbar />
      <Search
        onSearch={(value) => {
          if (value !== prevValue) {
            setSearchValue(value);
            setPrevValue(value);
            handleSearch(value);
          } else {
            setData([]);
            setPage(1);
            setPrevValue(value);
            handleSearch(value);
          }
        }}
      />
      <div className={styles.CardContainer}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
