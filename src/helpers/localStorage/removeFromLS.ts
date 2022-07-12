export const removeFromLS = (cityName: string): void => {
  const cities: string[] = JSON.parse(localStorage.getItem('cities') || '[]');
  const filteredCities = cities.filter(item => item !== cityName);
  localStorage.setItem('cities', JSON.stringify(filteredCities));
};
