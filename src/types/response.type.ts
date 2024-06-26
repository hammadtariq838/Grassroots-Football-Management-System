export type BaseResponse = {
  success: boolean,
  message: string,
}

export type ErrorResponse = BaseResponse & {
  error: any,
}

export type UserResponse = BaseResponse & {
  user: {
    id: string,
    username: string,
    name: string,
    team: {
      name: string,
      players: string[]
    } | undefined
  }
}
export type UserSignupResponse = UserResponse;
export type UserSigninResponse = UserResponse;
export type UserSignoutResponse = BaseResponse;
export type UserGetAllResponse = BaseResponse & {
  users: {
    id: string,
    username: string,
    name: string,
    team: {
      name: string,
      players: string[]
    } | undefined
  }[]
};
export type UserGetByIdResponse = UserResponse;


export type GetAllPlayersResponse = BaseResponse & {
  players: {
    id: string,
    username: string,
    role: "player",
    // isVerified: boolean,
  }[]
}






export type TeamResponse = BaseResponse & {
  team: {
    id: string,
    name: string,
    coach: string,
    players: string[],
  }
}
export type GetTeamResponse = TeamResponse;
export type CreateTeamResponse = TeamResponse;
export type UpdateTeamResponse = TeamResponse;
export type DeleteTeamResponse = TeamResponse;
export type GetAllTeamsResponse = BaseResponse & {
  teams: {
    id: string,
    name: string,
    coach: string,
    players: string[],
  }[]
}






export type GameResponse = BaseResponse & {
  game: {
    id: string,
    name: string,
    dateTime: Date,
    teams: {
      coach: string,
      players: string[],
      name: string,
    }[],
  }
}
export type GetGameResponse = GameResponse;
export type CreateGameResponse = GameResponse;
export type UpdateGameResponse = GameResponse;
export type DeleteGameResponse = GameResponse;
export type GetAllGamesResponse = BaseResponse & {
  games: {
    id: string,
    name: string,
    dateTime: Date,
    teams: {
      coach: string,
      players: string[],
      name: string,
    }[],
  }[]
}
