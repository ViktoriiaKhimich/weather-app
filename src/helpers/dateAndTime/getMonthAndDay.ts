import { monthNames } from '../../constants';

export const getMonthAndDay = (date: number): string => {
  const newDate = new Date(date * 1000);
  return `${monthNames[newDate.getMonth()]}, ${newDate.getDate()}`;
};
