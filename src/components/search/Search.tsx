import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchEngine } from '../../utils/constants';
import {
  setSearchEngine,
  setQuery,
  selectSearchEngine,
  selectQuery,
} from './searchSlice';

export function Search() {
  const searchEngine = useSelector(selectSearchEngine);
  const query = useSelector(selectQuery);

  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [selectValue, setSelectValue] = useState(SearchEngine.Google as string);

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectValue(e.target.value);

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cleanText = inputText.trim().toLowerCase();
    if (!cleanText || (cleanText === query && selectValue === searchEngine))
      return;
    dispatch(setSearchEngine(selectValue));
    dispatch(setQuery(cleanText));
  };

  return (
    <section className='row' aria-label='search components'>
      <input
        type='text'
        className='input'
        value={inputText}
        onChange={handleTextInputChange}
        aria-label='set search query text'
      />
      <select
        value={selectValue}
        onChange={handleSelectChange}
        aria-label='search engine to use'>
        <option value={SearchEngine.Google}>{SearchEngine.Google}</option>
        <option value={SearchEngine.Bing}>{SearchEngine.Bing}</option>
        <option value={SearchEngine.Both}>{SearchEngine.Both}</option>
      </select>
      <button onClick={handleSearchClick} aria-label='execute search'>
        Search
      </button>
    </section>
  );
}
