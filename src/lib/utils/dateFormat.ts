import { format } from "date-fns";

const dateFormat = (
  date: Date | string,
  pattern: string = "MMMM dd, yyyy",
): string => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern);
  return output;
};

export default dateFormat;
