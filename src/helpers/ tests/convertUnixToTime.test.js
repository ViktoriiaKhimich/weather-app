import { convertUnixToTime } from '../dateAndTime/convertUnixToTime';

describe('test convertUnixToTime helper', () => {
  it('should return correct time if unix timestamp is provided', () => {
    expect(convertUnixToTime(1657590655)).toBe('4:50 AM');
  });

  it('should not return correct time if provided unix timestamp is incorrect', () => {
    expect(convertUnixToTime(165759065)).toBe('3:11 PM');
  });
});
