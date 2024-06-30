import { isWithinRange, localTime, maxDateMs } from "/src/utils";

// --------------------------
// Til Nina:
// Legg inn nye datoer her
const dates = [
  "06.03.2024",
  "10.04.2024",
  "30.04.2024",
  "29.05.2024",
  "19.06.2024",
  "24.07.2024",
  "14.08.2024",
  "18.09.2024",
];
// --------------------------

export const freePregnancyId = "gratis-gravidfotografering";

const rawDates = dates.sort(
  (a, b) =>
    localTime(`${a} 00:00`).valueOf() - localTime(`${b} 00:00`).valueOf(),
);

const now = new Date();
const freePregnancyDates = rawDates.map((date, i) => {
  const previousDate = i === 0 ? null : rawDates[i - 1];
  return {
    nextDate: date,
    validFrom: previousDate && localTime(`${previousDate} 00:00`),
    validTo: i == rawDates.length - 1 ? null : localTime(`${date} 00:00`),
  };
});

export const freePregnancyDate =
  freePregnancyDates.find((d) =>
    isWithinRange(
      d.validFrom ?? new Date(0),
      now,
      d.validTo ?? new Date(maxDateMs),
    ),
  ) ?? freePregnancyDates[freePregnancyDates.length - 1];
