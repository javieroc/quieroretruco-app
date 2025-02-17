import { atom } from 'jotai';
import { Match, Player, Status, Move, Game } from './types';
import { generateHands } from './utils';

export const matchAtom = atom<Match | null>({
  id: '',
  players: [],
  status: 'waiting',
  currentGame: {
    id: '',
    botomIndex: 1,
    currentRound: 1,
    rounds: [],
    score: {
      us: 0,
      they: 0,
    },
  },
  gameHistory: [],
  totalScore: {
    us: 0,
    they: 0,
  },
});

export const addPlayerAtom = atom(null, (get, set, newPlayer: Player) => {
  const match = get(matchAtom);
  if (!match) return;

  if (match.players.length >= 6) return;

  set(matchAtom, {
    ...match,
    players: [...match.players, newPlayer] as ReadonlyArray<Player>,
  });
});

export const removePlayerAtom = atom(null, (get, set, playerId: string) => {
  const match = get(matchAtom);
  if (!match) return;

  set(matchAtom, {
    ...match,
    players: match.players.filter((player) => player.id !== playerId),
  });
});

export const updateMatchStatusAtom = atom(null, (get, set, status: Status) => {
  const match = get(matchAtom);
  if (!match) return;

  set(matchAtom, { ...match, status });
});

export const addMoveAtom = atom(null, (get, set, move: Move) => {
  const match = get(matchAtom);
  if (!match) return;

  const game = match.currentGame;
  const currentRoundIndex = game.currentRound - 1;
  const updatedRounds = [...game.rounds];

  updatedRounds[currentRoundIndex] = {
    ...updatedRounds[currentRoundIndex],
    history: [...updatedRounds[currentRoundIndex].history, move],
  };

  set(matchAtom, {
    ...match,
    currentGame: { ...game, rounds: updatedRounds },
  });
});

export const nextRoundAtom = atom(null, (get, set) => {
  const match = get(matchAtom);
  if (!match) return;

  const game = match.currentGame;

  if (game.currentRound === 3) {
    // Game Over, move to next game
    set(matchAtom, {
      ...match,
      gameHistory: [...match.gameHistory, game.id], // Store game ID
      currentGame: {
        id: `game-${match.gameHistory.length + 1}`,
        botomIndex: (game.botomIndex + 1) % match.players.length, // Rotate Botom
        currentRound: 1,
        rounds: [],
        score: { us: 0, they: 0 },
      },
    });
  } else {
    // Continue to next round
    set(matchAtom, {
      ...match,
      currentGame: { ...game, currentRound: (game.currentRound + 1) as 1 | 2 | 3 },
    });
  }
});

export const updateScoreAtom = atom(
  null,
  (get, set, { us, they }: { us: number; they: number }) => {
    const match = get(matchAtom);
    if (!match) return;

    const game = match.currentGame;
    const newTotalScore = {
      us: match.totalScore.us + us,
      they: match.totalScore.they + they,
    };

    const matchFinished = newTotalScore.us >= 30 || newTotalScore.they >= 30;

    set(matchAtom, {
      ...match,
      currentGame: { ...game, score: { us: game.score.us + us, they: game.score.they + they } },
      totalScore: newTotalScore,
      status: matchFinished ? 'finished' : match.status,
    });
  },
);

export const startGameAtom = atom(null, (get, set) => {
  const match = get(matchAtom);
  if (!match) return;

  const numOfPlayers = match.players.length;
  if (numOfPlayers < 2 || numOfPlayers % 2 !== 0) {
    return;
  }

  const hands = generateHands(numOfPlayers);
  const botonIndex = Math.floor(Math.random() * numOfPlayers);

  const updatedPlayers = match.players.map((player, index) => ({
    ...player,
    hand: hands[index] as [string, string, string],
  }));

  const newGame: Game = {
    id: `game-${match.gameHistory.length + 1}`,
    botomIndex: botonIndex,
    currentRound: 1,
    rounds: [],
    score: { us: 0, they: 0 },
  };

  set(matchAtom, {
    ...match,
    players: updatedPlayers,
    currentGame: newGame,
    status: 'playing',
  });
});
