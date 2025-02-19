import { FC } from 'react';
import { Player as PlayerType } from '../types';
import Star from '../assets/star.png';
import { PlayCard } from './PlayCard';
import clsx from 'clsx';

interface PlayerProps {
  player: PlayerType;
  isBoton: boolean;
  totalPlayers: number;
}

const Player: FC<PlayerProps> = ({ player, isBoton, totalPlayers }) => {
  const positionsCss: Record<string, string> = {
    '1-2': 'bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[50%]',
    '1-4': 'bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[50%]',
    '1-6': 'bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[50%]',
    '2-2': 'top-0 left-[50%] transform translate-x-[-50%] translate-y-[-50%]',
    '2-4': 'top-[50%] left-0 transform translate-x-[-50%] translate-y-[-50%]',
    '3-4': 'top-0 left-[50%] transform translate-x-[-50%] translate-y-[-50%]',
    '4-4': 'top-[50%] right-0 transform translate-x-[50%] translate-y-[-50%]',
    '2-6': 'top-[75%] left-0 transform translate-x-[-50%] translate-y-[-50%]',
    '3-6': 'top-[25%] left-0 transform translate-x-[-50%] translate-y-[-50%]',
    '4-6': 'top-0 left-[50%] transform translate-x-[-50%] translate-y-[-50%]',
    '5-6': 'top-[25%] right-0 transform translate-x-[50%] translate-y-[-50%]',
    '6-6': 'top-[75%] right-0 transform translate-x-[50%] translate-y-[-50%]',
  };
  const positionCss = `${player.position}-${totalPlayers}`;
  return (
    <div className={`absolute ${positionsCss[positionCss]}`}>
      <div className="flex flex-col gap-1 items-center relative">
        <div className="font-bold text-sm bg-gray-50 rounded-full px-2 py-1">{player.name}</div>
        <img
          src={player.image}
          alt="Player avatar"
          className={clsx('w-14 h-14 rounded-full border-4', {
            'border-blue-600': player.team === 'us',
            'border-red-600': player.team === 'they',
          })}
        />
        {isBoton && (
          <img src={Star} className="w-6 h-6 absolute top-9 right-6" alt="Boton player" />
        )}
        <div className="flex gap-1">
          {player.hand.map((card, i) => (
            <PlayCard key={i} image={card} play={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Player };
