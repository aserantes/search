import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchEngine } from '../../utils/constants';
import {
  setSearchEngine,
  setQuery,
  getSearchEngine,
  getQuery,
} from './searchSlice';

export function Search() {
  const searchEngine = useSelector(getSearchEngine);
  const query = useSelector(getQuery);

  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [selectValue, setSelectValue] = useState<SearchEngine>(
    SearchEngine.Google
  );

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectValue(e.target.value as SearchEngine);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanText = inputText.trim().toLowerCase();
    if (cleanText === query && selectValue === searchEngine) return;
    dispatch(setSearchEngine(selectValue));
    dispatch(setQuery(cleanText));
  };

  return (
    <section className='row' aria-label='search components'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='input'
          value={inputText}
          onChange={handleTextInputChange}
          aria-label='searchTermTextInput'
        />
        <select
          value={selectValue}
          onChange={handleSelectChange}
          aria-label='searchEngineSelect'>
          <option value={SearchEngine.Google}>{SearchEngine.Google}</option>
          <option value={SearchEngine.Bing}>{SearchEngine.Bing}</option>
          <option value={SearchEngine.Both}>{SearchEngine.Both}</option>
        </select>
        <button type='submit' aria-label='searchSubmit'>
          Search
        </button>
      </form>
    </section>
  );
}
