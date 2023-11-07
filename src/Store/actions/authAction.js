export const loginSuccess = (token) => {
    return {
      type: 'LOGIN_SUCCESS',
      token,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };