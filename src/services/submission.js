import axios from '../config/axios.config';
import getDiscordId from '../utils/getDiscordId';

function submitQuestion({ question_unique_id, status }) {
  const discord_id = getDiscordId();

  if (!discord_id) throw new Error('discord id not found');

  const res = axios.post('https://api.devsnest.in/api/v1/submissions', {
    data: {
      attributes: {
        discord_id,
        question_unique_id,
        status,
      },
      type: 'submissions',
    },
  });

  return res;
}

export { submitQuestion };
