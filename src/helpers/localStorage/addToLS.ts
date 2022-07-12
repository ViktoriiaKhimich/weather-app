export const addToLS = (cityName: string): void => {
  const cities: string[] = JSON.parse(localStorage.getItem('cities') || '[]');
  if (!cities.includes(cityName)) {
    cities.push(cityName);
  }
  localStorage.setItem('cities', JSON.stringify(cities));
};
