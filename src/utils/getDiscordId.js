const { loadStorage } = require('./localStorage');

export default function getDiscordId() {
  const state = loadStorage(`${window.origin}/state`);
  const { login } = state;
  if (login && login.user && login.user.discord_id) {
    return login.user.discord_id;
  }
  return null;
}
