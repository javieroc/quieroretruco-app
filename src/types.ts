export type Player = {
  id: string;
  name: string;
  image: string;
  position: number;
  hand: string[];
};

export type Status = 'waiting' | 'playing' | 'finished';

export type Spell =
  | 'envido'
  | 'real envido'
  | 'falta envido'
  | 'truco'
  | 're truco'
  | 'vale cuatro';

export interface Move {
  playerId: string;
  card: string | null;
  spell?: Spell;
}

export interface Match {
  id: string;
  players: ReadonlyArray<Player>;
  status: Status;
  currentGame: Game;
  gameHistory: string[];
  totalScore: {
    us: number;
    they: number;
  };
}

export interface Game {
  id: string;
  botomIndex: number;
  currentRound: 1 | 2 | 3;
  rounds: Array<{
    history: Move[];
    won?: string;
  }>;
  score: {
    us: number;
    they: number;
  };
}
