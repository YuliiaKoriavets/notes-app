import axios from 'axios';

const API_KEY = 'cfWQBdPvTjW6L2WQWEC8oI';
const BASE_URL = 'https://quintadb.com.ua/apps/cXW5_cU8npWQfOh8oRWP5J/dtypes';

export const getAllNotes = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/entity/b8lf9vWR5cO4ouW4hdMLqr.json?rest_api_key=${API_KEY}`
  );
  return data.records;
};

export const getNoteById = async id => {
  const { data } = await axios.get(`${BASE_URL}/${id}.json?rest_api_key=${API_KEY}`);
  return data.record;
};

export const addNote = async note => {
  const response = await axios.post(`${BASE_URL}.json`, note);
  return response;
};

export const updateNote = async (id, newData) => {
  const { data } = await axios.put(`${BASE_URL}/${id}.json`, newData)
  return data
}

export const deleteById = async id => {
  const response = await axios.delete(`${BASE_URL}/${id}.json?rest_api_key=${API_KEY}`);
  return response;
};

// const query = {
//   "rest_api_key": "cfWQBdPvTjW6L2WQWEC8oI",
//   "entity_id": "b8lf9vWR5cO4ouW4hdMLqr",
//   "search": [
//       [
//           {
//               "a": "aVzCoOuYnkW5u8WRXUWPeK",
//               "b": "React",
//               "o": "contains"
//           }
//       ]
//   ]
// }

export const searchNote = async query => {
  const {data} = await axios.post(`https://quintadb.com.ua/search/cXW5_cU8npWQfOh8oRWP5J.json`, query)
  return data.records
}
