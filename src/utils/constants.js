export const API_URL = {
  LOGIN: () => `/api/login`,
  GET_USER_PROFILE: (_id) => `/api/profile/${_id}`,
  GET_BOOKLIST: () => `/api/book/allBook`,
  GET_BALANCE:(_id) => `/api/wallet/getBalance/${_id}`
};
