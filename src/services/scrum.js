import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';

// PUT -  http://localhost:8000/api/v1/scrums/14?group_id=1
// POST- http://localhost:8000/api/v1/scrums?group_id=1

// GET - http://localhost:8000/api/v1/scrums?group_id=1

// post
// {
//   "data":{
//       "attributes":{
//       "user_id": "1",
//       "group_id": "1",
//               "attendance": null,
//               "saw_last_lecture": null,
//               "tha_progress": null,
//               "topics_to_cover": null,
//               "backlog_reasons": null,
//               "class_rating": null
//       },
//       "type": "scrums"
//   }
// }

// put
// {

//   "data":{
//       "id": "2",
//       "attributes":{
//               "attendance": true,
//               "saw_last_lecture": false,
//               "tha_progress": "55",
//               "topics_to_cover":"bdhcbhe" ,
//               "backlog_reasons": "kuch nahi",
//               "class_rating": 5
//       },
//       "type": "scrums"
//   }
// }

// GET - http://localhost:8000/api/v1/scrums?group_id=1

export const getScrums = async (group_id) => {
  const params = { group_id: group_id };
  const response = await axios.get(`${API_ENDPOINTS.SCRUMS}`, { params });
  response.data.data.push({
    id: '14',
    type: 'scrums',
    links: {
      self: 'http://localhost:8000/api/v1/scrums/14',
    },
    attributes: {
      user_id: 3,
      group_id: 1,
      attendance: true,
      saw_last_lecture: true,
      tha_progress: '55',
      topics_to_cover: null,
      backlog_reasons: null,
      class_rating: 5,
      creation_date: '2021-06-21T13:42:57.534+05:30',
    },
  });
  return transformData(response.data.data);
  // return transformData(dummy_Scrum_get.data);
};

export function transformData(data) {
  console.log(data);
  return data.map((scrum) => {
    const {
      user_id,
      group_id,
      attendance,
      saw_last_lecture,
      tha_progress,
      topics_to_cover,
      backlog_reasons,
      class_rating,
      creation_date,
    } = scrum.attributes;
    const scrum_id = scrum.id;
    return {
      scrum_id,
      user_id,
      group_id,
      attendance,
      saw_last_lecture,
      tha_progress,
      topics_to_cover,
      backlog_reasons,
      class_rating,
      creation_date,
    };
  });
}
export const saveScrum = async (member) => {
  const {
    id,
    user_id,
    data,
    attendance,
    saw_last_lecture,
    tha_progress,
    what_cover_today,
    reason_for_backlog,
    class_rating,
  } = member;

  const attributes = {
    attendance,
    data,
    saw_last_lecture,
    tha_progress,
    what_cover_today,
    reason_for_backlog,
    class_rating,
  };

  if (id) {
    const response = await axios.put(`${API_ENDPOINTS.SCRUMS}/${id}`, {
      data: { attributes, id: id, type: 'scrums' },
    });
    return response.data;
  } else {
    const response = await axios.post(`${API_ENDPOINTS.SCRUMS}`, {
      data: { attributes: { ...attributes, user_id }, type: 'scrums' },
    });
    return response.data;
  }
};

export const saveCurrentUserScrum = async (member, sendattendance) => {
  const {
    id,
    data,
    saw_last_lecture,
    tha_progress,
    what_cover_today,
    reason_for_backlog,
    class_rating,
  } = member;

  const attributes = {
    data,
    saw_last_lecture,
    tha_progress,
    what_cover_today,
    reason_for_backlog,
    class_rating,
  };

  if (id) {
    const response = await axios.put(`${API_ENDPOINTS.SCRUMS}/${id}`, {
      data: { attributes, id, type: 'scrums' },
    });
    return response.data;
  } else {
    const response = await axios.post(`${API_ENDPOINTS.SCRUMS}`, {
      data: { attributes, type: 'scrums' },
    });
    return response.data;
  }
};

const dummy_Scrum_get = {
  data: [
    {
      id: '14',
      type: 'scrums',
      links: {
        self: 'http://localhost:8000/api/v1/scrums/14',
      },
      attributes: {
        user_id: 3,
        group_id: 1,
        attendance: true,
        saw_last_lecture: true,
        tha_progress: '55',
        topics_to_cover: null,
        backlog_reasons: null,
        class_rating: 5,
        creation_date: '2021-06-21T13:42:57.534+05:30',
      },
    },
    {
      id: '15',
      type: 'scrums',
      links: {
        self: 'http://localhost:8000/api/v1/scrums/15',
      },
      attributes: {
        user_id: 4,
        group_id: 1,
        attendance: null,
        saw_last_lecture: null,
        tha_progress: null,
        topics_to_cover: null,
        backlog_reasons: null,
        class_rating: null,
        creation_date: '2021-06-21T14:27:29.507+05:30',
      },
    },
    {
      id: '16',
      type: 'scrums',
      links: {
        self: 'http://localhost:8000/api/v1/scrums/16',
      },
      attributes: {
        user_id: 5,
        group_id: 1,
        attendance: null,
        saw_last_lecture: null,
        tha_progress: null,
        topics_to_cover: null,
        backlog_reasons: null,
        class_rating: null,
        creation_date: '2021-06-21T14:27:32.751+05:30',
      },
    },
    {
      id: '17',
      type: 'scrums',
      links: {
        self: 'http://localhost:8000/api/v1/scrums/17',
      },
      attributes: {
        user_id: 2,
        group_id: 1,
        attendance: null,
        saw_last_lecture: null,
        tha_progress: null,
        topics_to_cover: null,
        backlog_reasons: null,
        class_rating: null,
        creation_date: '2021-06-21T14:27:35.626+05:30',
      },
    },
  ],
};

function getInitialScrumData(groupMembers) {
  console.log(groupMembers);
  const dummyData = {};
}
