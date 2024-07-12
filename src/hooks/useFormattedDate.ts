import { useMemo } from "react";

export const getFormattedDate = (date: Date) => {
  const now = new Date();
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleTimeString(undefined, options);
  } else {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("ko-KR", options).replace(/\.$/, "");
  }
};

export const useFormattedDate = (date: Date) => {
  const formattedDate = useMemo(() => getFormattedDate(date), [date]);
  return formattedDate;
};
