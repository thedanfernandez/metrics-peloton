const dayjs = require("dayjs");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);

/**
 * Returns a readable date based on given date string
 * Format: YYYY-MM-DD
 * @param {string} dateString Date string
 * @return {string} Readable Date
 */
export const getReadableDate = (dateString) => {
  return dayjs(dateString).format("YYYY-MM-DD");
};

/**
 * Returns a readable date based on given date
 * Format: MMM DD, YYYY
 * @param {date} date Date
 * @return {string} Friendly Date
 */
export const getFriendlyDate = (date) => {
  const parsedDate = dayjs(date);
  return parsedDate.format("MMM DD, YYYY");
};

/**
 * Returns true if date is before givenDate
 * @param {string} date Date
 * @param {string} givenDate Given Date
 * @return {boolean}
 */
export const isDateSameOrBeforeGivenDate = (date, givenDate) => {
  return dayjs(date).isSameOrBefore(dayjs(givenDate));
};

/**
 * Returns true if date is after givenDate
 * @param {string} date Date
 * @param {string} givenDate Given Date
 * @return {boolean}
 */
export const isDateSameOrAfterGivenDate = (date, givenDate) => {
  return dayjs(date).isSameOrAfter(dayjs(givenDate));
};
