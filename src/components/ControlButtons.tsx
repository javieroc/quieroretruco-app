import { FC } from 'react';
import clsx from 'clsx';
import { faker } from '@faker-js/faker';
import Player1 from '../assets/boxitracio.jpg';
import Player2 from '../assets/larguirucho.jpg';
import Player3 from '../assets/hijitus.jpg';
import Player4 from '../assets/comisario.jpg';
import Player5 from '../assets/neurus.jpg';
import Player6 from '../assets/pucho.jpg';
import { useMatch } from '../hooks/useMatch';

const ControlButtons: FC = () => {
  const { match, addPlayer, createNewMatch, startGame } = useMatch();
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
    <section className="flex gap-2">
      <button
        type="button"
        className={clsx(
          'text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2',
          {
            'bg-purple-700 hover:bg-purple-800': !match,
            'bg-purple-400 cursor-not-allowed': match,
          },
        )}
        disabled={!!match}
        onClick={() => createNewMatch()}
      >
        New Match
      </button>
      <button
        type="button"
        className={clsx(
          'text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2',
          {
            'bg-purple-700 hover:bg-purple-800': match,
            'bg-purple-400 cursor-not-allowed': !match,
          },
        )}
        disabled={!match}
        onClick={() => startGame()}
      >
        Start Game
      </button>
      <button
        type="button"
        className={clsx(
          'text-white  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2',
          {
            'bg-green-700 hover:bg-green-800': (match?.players.length ?? 0) < 6,
            'bg-green-500 cursor-not-allowed': (match?.players.length ?? 0) >= 6,
          },
        )}
        onClick={() =>
          addPlayer({
            id: faker.string.uuid(),
            hand: [],
            image: avatars[totalPlayers + 1],
            name: faker.person.firstName(),
            position: totalPlayers + 1,
          })
        }
      >
        Add Player
      </button>
    </section>
  );
};

export { ControlButtons };
