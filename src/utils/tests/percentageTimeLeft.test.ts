import { percentageTimeLeft } from "../percentageTimeLeft";

describe("Percentage Time Left", () => {
  it("Feeding time to get time left", () => {
    const min = 5;
    const sec = 10;
    const totalTime = 10 * 60;

    const percentage = percentageTimeLeft(min, sec, totalTime);

    expect(Math.floor(percentage)).toEqual(51);
  });
});
