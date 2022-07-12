export const convertUnixToTime = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
};
