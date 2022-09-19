const dayjs = require("dayjs");

const dateFormat = (date) => {
  return dayjs(date).format("MMM D, YYYY");
};

export default dateFormat;
