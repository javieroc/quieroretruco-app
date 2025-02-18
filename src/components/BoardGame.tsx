import { Player } from './Player';
import { useMatch } from '../hooks/useMatch';

const BoardGame = () => {
  const { match } = useMatch();
  return (
    <section
      id="board"
      className="w-[340px] h-[340px] bg-green-700 rounded-full border-8 border-gray-600 relative"
    >
      {match?.players.map((player, index) => (
        <Player
          key={player.id}
          player={player}
          totalPlayers={match.players.length}
          isBoton={index === match.currentGame.botomIndex}
        />
      ))}
    </section>
  );
};

export { BoardGame };
