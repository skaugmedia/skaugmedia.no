export const kr = (price) => `Kr. ${price},-`;
export const byDate = (shoot1, shoot2) =>
  new Date(shoot2.date) - new Date(shoot1.date);

export const mkTitle = (pageName) => `${pageName} - Skaug Media`;
