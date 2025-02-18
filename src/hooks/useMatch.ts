import { useAtom } from 'jotai';
import {
  matchAtom,
  addPlayerAtom,
  removePlayerAtom,
  updateMatchStatusAtom,
  nextRoundAtom,
  addMoveAtom,
  updateScoreAtom,
  startGameAtom,
  createNewMatchAtom,
} from '../atoms';
import { Player, Status, Move } from '../types';

export const useMatch = () => {
  const [match] = useAtom(matchAtom);
  const [, createNewMatch] = useAtom(createNewMatchAtom);
  const [, addPlayer] = useAtom(addPlayerAtom);
  const [, removePlayer] = useAtom(removePlayerAtom);
  const [, updateMatchStatus] = useAtom(updateMatchStatusAtom);
  const [, nextRound] = useAtom(nextRoundAtom);
  const [, addMove] = useAtom(addMoveAtom);
  const [, updateScore] = useAtom(updateScoreAtom);
  const [, startGame] = useAtom(startGameAtom);

  return {
    match,
    addPlayer: (player: Player) => addPlayer(player),
    removePlayer: (playerId: string) => removePlayer(playerId),
    updateMatchStatus: (status: Status) => updateMatchStatus(status),
    nextRound: () => nextRound(),
    addMove: (move: Move) => addMove(move),
    updateScore: (score: { us: number; they: number }) => updateScore(score),
    startGame: () => startGame(),
    createNewMatch: () => createNewMatch(),
  };
};
