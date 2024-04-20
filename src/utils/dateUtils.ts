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

export const getTimeDifference = (targetTime: string) => {
  const targetDate = new Date(targetTime);
  const currentDate = new Date();

  const timeDifference = Math.floor((currentDate.getTime() - targetDate.getTime()) / 1000); // 초 단위 차이 계산

  if (timeDifference < 60) {
    return "방금 전";
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes}분 전`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours}시간 전`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    return `${days}일 전`;
  }
};
