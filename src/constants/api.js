export const API_BASE_URL = process.env.REACT_APP_API_URL;
console.log(`using api base url:`, API_BASE_URL);

export const API_ENDPOINTS = {
  LOGIN_WITH_DISCORD: `api/v1/users/auth/discord`,
  LOGOUT: `api/v1/users/log_out`,
  CURRENT_USER: 'api/v1/users/me',
  CONTENTS: `api/v1/contents`,
};
