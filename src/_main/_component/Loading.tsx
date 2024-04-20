import bun from "../../../public/bun.svg";
import carrot from "../../../public/carrot.svg";
import jung from "../../../public/jung.svg";
import styles from "./Loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.loadingWrap}>
      <div className={styles.imgWrap}>
        <Image src={jung} alt="로고 이미지" width={60} height={60} className={styles.jung} />
        <Image src={bun} alt="로고 이미지" width={60} height={60} className={styles.bun} />
        <Image src={carrot} alt="로고 이미지" width={60} height={60} className={styles.carrot} />
      </div>
    </div>
  );
}
