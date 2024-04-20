import styles from "./card.module.css";
import { ICardProps } from "../type/types";
import { getTimeDifference } from "@/utils/dateUtils";

export default function Card({ item }: ICardProps) {
  const timeDifference = getTimeDifference(item.time);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(item.link, "_blank");
  };

  return (
    <div className={styles.CardContainer} onClick={handleLinkClick}>
      <img className={styles.Image} src={item.img} alt="상품 이미지" width={240} height={180} />
      <div className={styles.Name}>{item.name}</div>
      <div className={styles.subContetContainer}>
        <div>{item.price}</div>
        <div>{timeDifference}</div>
      </div>
      <div className={styles.region}>
        {Array.isArray(item.region) && item.region.length === 0 ? "전국" : item.region || "전국"}
      </div>
      <div className={styles.tag}>{item.tag}</div>
    </div>
  );
}
