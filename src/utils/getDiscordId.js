const { loadStorage } = require('./localStorage');

export default function getDiscordId() {
  const state = loadStorage(`${window.origin}/state`);
  const { loginState } = state;
  if (loginState && loginState.user && loginState.user.discord_id) {
    return loginState.user.discord_id;
  }
  return null;
}
