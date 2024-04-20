import dayjs from "dayjs";

export const DateUtils = (timestamp: string | number | boolean | [] | null): string => {
  if (timestamp === null) {
    throw new Error("Timestamp가 유효하지 않습니다.");
  }

  let parsedTimestamp: number;
  if (typeof timestamp === "string") {
    parsedTimestamp = parseInt(timestamp);
    if (isNaN(parsedTimestamp)) {
      throw new Error("Timestamp가 숫자로 변환되지 않습니다.");
    }
  } else if (typeof timestamp === "number") {
    parsedTimestamp = timestamp;
  } else {
    throw new Error("Timestamp가 유효하지 않습니다.");
  }

  const formattedDate = dayjs(parsedTimestamp * 1000).format("YYYY-MM-DD HH:mm:ss");
  return formattedDate;
};
