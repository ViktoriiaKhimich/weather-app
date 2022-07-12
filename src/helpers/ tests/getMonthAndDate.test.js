import { getMonthAndDay } from '../dateAndTime/getMonthAndDay';

describe('test getMonthAndDay helper', () => {
  it('should return correct month and day', () => {
    expect(getMonthAndDay(1657615069)).toBe('July, 12');
  });

  it('should return incorrect month and day if provided date is incorrect(missing character)', () => {
    expect(getMonthAndDay(165761506)).toBe('April, 3');
  });
});
