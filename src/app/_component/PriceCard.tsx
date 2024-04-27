import { useState, useEffect } from "react";
import { IObjProps } from "../_main/MainLayout";
import styles from "./pricecard.module.css";

interface PriceCardProps {
  data: IObjProps[] | null;
}

export default function PriceCard({ data }: PriceCardProps) {
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [avgPrice, setAvgPrice] = useState<string>("");

  useEffect(() => {
    if (!data) return;

    const prices = data.map((item) => parseFloat(item.price.replace(/[^0-9.-]+/g, "")));
    const newMaxPrice = Math.round(Math.max(...prices));
    const newMinPrice = Math.round(Math.min(...prices));
    const newAvgPrice = Math.round(prices.reduce((acc, curr) => acc + curr, 0) / prices.length);

    console.log(prices.reduce((acc, curr) => acc + curr, 0));

    setMaxPrice(newMaxPrice.toLocaleString() + "원");
    setMinPrice(newMinPrice.toLocaleString() + "원");
    setAvgPrice(newAvgPrice.toLocaleString() + "원");
  }, [data]);

  return (
    <div className={styles.Container}>
      <p>최고 가격: {maxPrice}</p>
      <p>최저 가격: {minPrice}</p>
      <p>평균 가격: {avgPrice}</p>
    </div>
  );
}
