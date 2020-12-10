import React, { FunctionComponent } from 'react';
import { Search } from './components/search/Search';
import { Results } from './components/results/Results';
import { SearchEngine } from './utils/constants';
import {
  selectSearchEngine,
  selectQuery,
} from './components/search/searchSlice';
import { useSelector } from 'react-redux';
import './App.css';

const App: FunctionComponent = () => {
  const query = useSelector(selectQuery);
  const searchEngine = useSelector(selectSearchEngine);
  const showGCS =
    searchEngine === SearchEngine.Google || searchEngine === SearchEngine.Both;
  const showBCS =
    searchEngine === SearchEngine.Bing || searchEngine === SearchEngine.Both;

  return (
    <div className='App'>
      <Search />
      {showGCS && <Results searchEngine={SearchEngine.Google} query={query} />}
      {showBCS && <Results searchEngine={SearchEngine.Bing} query={query} />}
    </div>
  );
};

export default App;
