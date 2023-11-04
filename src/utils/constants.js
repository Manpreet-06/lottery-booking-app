export const API_URL = {
  LOGIN: () => `/api/login`,
  GET_USER_PROFILE: (_id) => `/api/profile/${_id}`,
  GET_BOOKLIST: () => `/api/book/allBook`,
  GET_BALANCE: (_id) => `/api/wallet/getBalance/${_id}`,
  GET_WALLETHISTORY: (_id) => `/api/wallet/walletHistory/${_id}`,
  GET_GAMES: () => `/api/game/getGame`,
  PLACE_ORDER: () => `/api/order/placeOrder`,
  GAME_RESULT: () =>
    `/api/order/gameResult/2e1fb857-3d2f-4adb-8096-2ac032143a04`,
  PLACE_ORDER: () => `/api/order/placeOrder`,
  WINNER_LIST:() => `/api/order/winnerList/653dec2f5068cfd79e725f9e`
};
