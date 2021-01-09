export const login = () => {
  return {
    type: 'LOGIN',
  };
};

export const logout = (payload) => {
  return {
    type: 'LOGOUT',
    payload,
  };
};
