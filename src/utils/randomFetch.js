export default function randomFetch(pageOrGenre) {
  const numberList = [
    28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878,
    10770, 53, 10752, 37,
  ];
  const randomIndex = Math.floor(Math.random() * numberList.length);

  if (pageOrGenre === 'genre') {
    return numberList[randomIndex];
  } else if (pageOrGenre === 'page') {
    return Math.floor(Math.random() * 100);
  }
}
