const cardsTypes: string[] = ['oro', 'copa', 'espada', 'basto'];
const cardsNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

const shuffle = (array: string[]): string[] => {
  return array.sort(() => Math.random() - 0.5);
};

const generateHands = (numOfPlayers: number): string[][] => {
  const cards = cardsTypes.reduce(
    (res: string[], cardType) => [
      ...res,
      ...cardsNumbers.map((cardNumber) => `${cardNumber}-${cardType}`),
    ],
    [],
  );
  const cardsShuffled = shuffle(cards);
  const res: string[][] = Array(numOfPlayers)
    .fill(0)
    .map(() => []);
  for (let i = 1; i <= numOfPlayers * 3; i += 1) {
    if (cardsShuffled.length > 0) {
      res[i % numOfPlayers].push(cardsShuffled.shift() ?? '');
    }
  }
  return res;
};

export { generateHands };
