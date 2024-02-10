export const kr = (price) => `Kr. ${price},-`;
export const byDate = (shoot1, shoot2) =>
  new Date(shoot2.date) - new Date(shoot1.date);

export const mkTitle = (pageName) => `${pageName} - Skaug Media`;

// const utcDate = ({ year, month, day, hour, minute, second }) =>
//   Date.parse(
//     `${year || "1970"}-${month || "01"}-${day || "01"}T${hour || "00"}:${
//       minute || "00"
//     }:${second || "00"}Z`
//   );

// const parseDate = (s) => {
//   const [date, time] = s.split(" ");
//   const [day, month, year] = date.split("-");
//   const [hour, minute] = time.split(":");
//   return utcDate({ year, month, day, hour, minute });
// };

// export const localTime = (thisDate) => {
//   const local = parseDate(thisDate);
//   console.log(local);
//   return {
//     isBefore: (otherTime) => local.now() - otherTime.unwrap().now() < 0,
//     unwrap: () => local,
//   };
// };

// export const localTimeNow = () => {
//   const now = new Date();
//   const year = zeroPad(`${now.getFullYear()}`);
//   const month = zeroPad(`${now.getMonth() + 1}`);
//   const day = zeroPad(`${now.getDate()}`);
//   const hour = zeroPad(`${now.getHours()}`);
//   const minute = zeroPad(`${now.getMinutes()}`);
//   return localTime(`${day}-${month}-${year} ${hour}:${minute}`);
// };

// export const zeroPad = (s) => leftPad(2, "0", s);

// export const leftPad = (n, c, s) => {
//   if (s.length >= n) {
//     return s;
//   }
//   console.log(n, s.length);
//   return `${c.repeat(n - s.length)}${s}`;
// };

export const localTime = (s) => {
  const [date, time] = s.split(" ");
  const [day, month, year] = date.split("-");
  const [hour, minute] = time.split(":");
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
  );
};

export const isBefore = (x, y) => x.valueOf() - y.valueOf() < 0;

export const isWithinRange = (start, middle, end) =>
  isBefore(start, middle) && isBefore(middle, end);
