import { BoardGame } from './components/BoardGame';
import { Navbar } from './components/Navbar';
import { faker } from '@faker-js/faker';
import Player1 from './assets/boxitracio.jpg';
import Player2 from './assets/larguirucho.jpg';
import Player3 from './assets/hijitus.jpg';
import Player4 from './assets/comisario.jpg';
import Player5 from './assets/neurus.jpg';
import Player6 from './assets/pucho.jpg';
import { useMatch } from './hooks/useMatch';

const App = () => {
  const { match, addPlayer, startGame } = useMatch();
  const totalPlayers = match?.players.length ?? 0;
  const avatars: Record<number, string> = {
    1: Player1,
    2: Player2,
    3: Player3,
    4: Player4,
    5: Player5,
    6: Player6,
  };
  return (
    <>
      <Navbar />
      <section className="flex p-4 justify-end">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() =>
            addPlayer({
              id: faker.string.uuid(),
              hand: [],
              image: avatars[totalPlayers + 1],
              isBoton: totalPlayers + 1 === 1,
              name: faker.person.firstName(),
              position: totalPlayers + 1,
            })
          }
        >
          Add Player
        </button>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => startGame()}
        >
          Start Game
        </button>
      </section>
      <section className="flex justify-center mx-auto max-w-[1000px] p-4 mt-16">
        <BoardGame />
      </section>
    </>
  );
};

export { App };
