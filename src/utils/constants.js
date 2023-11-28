export const API_URL = {
  LOGIN: () => `/api/login`,
  GET_USER_PROFILE: (_id) => `/api/profile/${_id}`,
  GET_BOOKLIST: () => `/api/book/allBook`,
  GET_BALANCE: (_id) => `/api/wallet/getBalance/${_id}`,
  GET_WALLETHISTORY: (_id) => `/api/wallet/walletHistory/${_id}`,
  GET_GAMES: () => `/api/game/getGame`,
  PLACE_ORDER: () => `/api/order/placeOrder`,
  GAME_RESULT: (_id) => `/api/order/gameResult/${_id}`,
  PLACE_ORDER: () => `/api/order/placeOrder`,
  WINNER_LIST: (_id) => `/api/order/winnerList/${_id}`,
};
