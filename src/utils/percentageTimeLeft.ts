/**
 * Enter min, sec, and totalTime(in seconds)
 */
export const percentageTimeLeft = (
  min: number,
  sec: number,
  totalTime: number
) => ((min * 60 + sec) / totalTime) * 100;
