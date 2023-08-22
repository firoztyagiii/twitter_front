import {
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
  differenceInMonths,
} from "date-fns";

const getTweetTime = (time: Date) => {
  let diff: string;

  const currentMilli = Date.now();
  const tweetMilli = new Date(time).getTime();

  const minsDiff = differenceInMinutes(currentMilli, tweetMilli);
  const hoursDiff = differenceInHours(currentMilli, tweetMilli);
  const daysDiff = differenceInDays(currentMilli, tweetMilli);
  const monthsDiff = differenceInMonths(currentMilli, tweetMilli);

  if (minsDiff < 60) {
    diff = `${minsDiff}m ago`;
    return diff;
  } else if (hoursDiff < 24) {
    diff = `${hoursDiff}h ago`;
    return diff;
  } else if (daysDiff < 1) {
    diff = `${hoursDiff}d ago`;
    return diff;
  } else if (monthsDiff < 1) {
    diff = `${hoursDiff}m ago`;
    return diff;
  }
};

export default getTweetTime;
