import styles from "./card.module.css";
import { ICardProps } from "../type/types";

export default function Card({ item }: ICardProps) {
  return (
    <div className={styles.CardContainer}>
      <img src={item.img} alt="상품 이미지" width={150} height={180} />
    </div>
  );
}
