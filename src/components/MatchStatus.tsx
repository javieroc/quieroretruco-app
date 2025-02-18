import { FC } from 'react';
import { useMatch } from '../hooks/useMatch';

const MatchStatus: FC = () => {
  const { match } = useMatch();

  return (
    <section className="flex border-gray-200 border-1 rounded-md p-2">
      <div className="text-gray-800 border-r-1 border-r-gray-200 px-2">
        <h2 className="font-bold">Match</h2>
        <h2 className="font-bold">{`Status: ${match?.status ?? 'waiting'}`}</h2>
        <h2 className="font-bold">{`#Players: ${match?.players.length ?? 0}`}</h2>
      </div>
      <div className="text-gray-800 px-2">
        <h2 className="font-bold">Score</h2>
        <h2 className="font-bold text-blue-700">{`us: ${match?.totalScore.us ?? 0}`}</h2>
        <h2 className="font-bold text-red-600">{`they: ${match?.totalScore.they ?? 0}`}</h2>
      </div>
    </section>
  );
};

export { MatchStatus };
