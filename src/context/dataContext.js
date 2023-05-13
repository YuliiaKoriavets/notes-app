import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const API_KEY = 'cfWQBdPvTjW6L2WQWEC8oI';
const BASE_URL = 'https://quintadb.com.ua/apps/cXW5_cU8npWQfOh8oRWP5J/dtypes';

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/entity/b8lf9vWR5cO4ouW4hdMLqr.json?rest_api_key=${API_KEY}`
      );
      setNotes(data.records);
    };

    fetchNotes();
  }, []);

  const getNoteById = async id => {
    const { data } = await axios.get(`${BASE_URL}/${id}.json?rest_api_key=${API_KEY}`);
    return data.record;
  };

  const addNote = async note => {
    const response = await axios.post(`${BASE_URL}.json`, note);
    setNotes(prevNotes => [...prevNotes, response.data]);
  };

  const updateNote = async (id, newData) => {
    const { data } = await axios.put(`${BASE_URL}/${id}.json`, newData);
    setNotes(prevNotes => prevNotes.map(note => (note.id === id ? data : note)));
  };

  const deleteById = async id => {
    await axios.delete(`${BASE_URL}/${id}.json?rest_api_key=${API_KEY}`);
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const searchNote = async query => {
    const { data } = await axios.post(
      `https://quintadb.com.ua/search/cXW5_cU8npWQfOh8oRWP5J.json`,
      query
    );
    return data.records;
  };

  return (
    <DataContext.Provider
      value={{
        notes,
        getNoteById,
        addNote,
        updateNote,
        deleteById,
        searchNote,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
