export const kr = (price) => `Kr. ${price},-`;
export const byDate = (shoot1, shoot2) =>
  new Date(shoot2.date) - new Date(shoot1.date);

export const mkTitle = (pageName) => `${pageName} - Skaug Media | Fotografi, design og innholdsproduksjon | Jessheim`;

export const localTime = (s) => {
  const [date, time] = s.split(" ");
  const [day, month, year] = (() => {
    if (date.includes("-")) {
      return date.split("-");
    }
    return date.split(".");
  })();
  const [hour, minute] = (() => {
    if (time.includes(":")) {
      return time.split(":");
    }
    return time.split(".");
  })();
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
  );
};

export const maxDateMs = 8.64e15;

export const isBefore = (x, y) => x.valueOf() - y.valueOf() < 0;

export const isWithinRange = (start, middle, end) =>
  isBefore(start, middle) && isBefore(middle, end);
