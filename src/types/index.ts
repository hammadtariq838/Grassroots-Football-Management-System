export * from './response.type';
export * from './request.type';

export type User = {
  username: string;
  password: string;
  name: string;
  team?: {
    name: string;
    players: string[];
  };
};

export type Game = {
  name: string;
  dateTime: Date;
  teams: string[];
};

export type Message = {
  from: string;
  to: string;
  message: string;
  dateTime: Date;
};

export type GameChannel = {
  game: string;
  messages: Message[];
};
