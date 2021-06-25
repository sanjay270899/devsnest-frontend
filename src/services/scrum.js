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
//               "till_which_tha_you_are_done": null,
//               "what_will_you_cover_today": null,
//               "reason_for_backlog_if_any": null,
//               "rate_yesterday_class": null
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
//               "till_which_tha_you_are_done": "55",
//               "what_will_you_cover_today":"bdhcbhe" ,
//               "reason_for_backlog_if_any": "kuch nahi",
//               "rate_yesterday_class": 5
//       },
//       "type": "scrums"
//   }
// }

// GET - http://localhost:8000/api/v1/scrums?group_id=1

export const getScrums = (group_id) => {
  // const params = { group_id: group_id };
  // const response = await axios.get(`${API_ENDPOINTS.SCRUMS}`, { params });
  // return response.data;
  return transformData(dummy_Scrum_get.data);
};

export function transformData(data) {
  console.log(data);
  return data.map((scrum) => {
    const {
      user_id,
      group_id,
      attendance,
      saw_last_lecture,
      till_which_tha_you_are_done,
      what_will_you_cover_today,
      reason_for_backlog_if_any,
      rate_yesterday_class,
      created_at,
    } = scrum.attributes;
    const scrum_id = scrum.id;
    return {
      scrum_id,
      user_id,
      group_id,
      attendance,
      saw_last_lecture,
      till_which_tha_you_are_done,
      what_will_you_cover_today,
      reason_for_backlog_if_any,
      rate_yesterday_class,
      created_at,
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
    till_which_tha_you_are_done,
    what_cover_today,
    reason_for_backlog,
    rate_yesterday_class,
  } = member;

  const attributes = {
    attendance,
    data,
    saw_last_lecture,
    till_which_tha_you_are_done,
    what_cover_today,
    reason_for_backlog,
    rate_yesterday_class,
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
    till_which_tha_you_are_done,
    what_cover_today,
    reason_for_backlog,
    rate_yesterday_class,
  } = member;

  const attributes = {
    data,
    saw_last_lecture,
    till_which_tha_you_are_done,
    what_cover_today,
    reason_for_backlog,
    rate_yesterday_class,
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
        till_which_tha_you_are_done: '55',
        what_will_you_cover_today: null,
        reason_for_backlog_if_any: null,
        rate_yesterday_class: 5,
        created_at: '2021-06-21T13:42:57.534+05:30',
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
        till_which_tha_you_are_done: null,
        what_will_you_cover_today: null,
        reason_for_backlog_if_any: null,
        rate_yesterday_class: null,
        created_at: '2021-06-21T14:27:29.507+05:30',
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
        till_which_tha_you_are_done: null,
        what_will_you_cover_today: null,
        reason_for_backlog_if_any: null,
        rate_yesterday_class: null,
        created_at: '2021-06-21T14:27:32.751+05:30',
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
        till_which_tha_you_are_done: null,
        what_will_you_cover_today: null,
        reason_for_backlog_if_any: null,
        rate_yesterday_class: null,
        created_at: '2021-06-21T14:27:35.626+05:30',
      },
    },
  ],
};


 function getInitialScrumData(groupMembers){
  console.log(groupMembers);
  const dummyData={


  }
}