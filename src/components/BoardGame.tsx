import { Player } from './Player';
import Player1 from '../assets/boxitracio.jpg';
import Player2 from '../assets/larguirucho.jpg';
import Player3 from '../assets/hijitus.jpg';
import Player4 from '../assets/comisario.jpg';
import Player5 from '../assets/neurus.jpg';
import Player6 from '../assets/pucho.jpg';

const BoardGame = () => {
  const totalPlayers = 6;
  return (
    <section
      id="board"
      className="w-[340px] h-[340px] bg-green-700 rounded-full border-8 border-gray-600 relative"
    >
      <Player
        player={{
          name: 'Boxi',
          image: Player1,
          isBoton: true,
          position: 1,
          hand: ['1-espada', '4-oro', '1-basto'],
        }}
        totalPlayers={totalPlayers}
      />
      <Player
        player={{
          name: 'Larguirucho',
          image: Player2,
          isBoton: false,
          position: 2,
          hand: ['1-copa', '2-oro', '7-basto'],
        }}
        totalPlayers={totalPlayers}
      />
      <Player
        player={{
          name: 'Hijitus',
          image: Player3,
          isBoton: false,
          position: 3,
          hand: ['1-espada', '4-oro', '1-basto'],
        }}
        totalPlayers={totalPlayers}
      />
      <Player
        player={{
          name: 'Comisario',
          image: Player4,
          isBoton: false,
          position: 4,
          hand: ['1-copa', '2-oro', '7-basto'],
        }}
        totalPlayers={totalPlayers}
      />
      <Player
        player={{
          name: 'Neurus',
          image: Player5,
          isBoton: false,
          position: 5,
          hand: ['1-espada', '4-oro', '1-basto'],
        }}
        totalPlayers={totalPlayers}
      />
      <Player
        player={{
          name: 'Pucho',
          image: Player6,
          isBoton: false,
          position: 6,
          hand: ['1-copa', '2-oro', '7-basto'],
        }}
        totalPlayers={totalPlayers}
      />
    </section>
  );
};

export { BoardGame };
