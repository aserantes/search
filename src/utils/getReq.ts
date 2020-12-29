import { SearchEngine } from './constants';

interface Headers {
  headers?: {
    'Ocp-Apim-Subscription-Key'?: string;
  };
}

interface Req {
  url: string;
  headers?: Headers;
}

const BING_BASE_URL = 'https://api.bing.microsoft.com/v7.0/custom/search';
const BING_KEY = process.env.REACT_APP_BING_KEY;
const BING_CUSTOM_CONFIG = process.env.REACT_APP_BING_CUSTOM_CONFIG;

const GOOGLE_BASE_URL = 'https://customsearch.googleapis.com/customsearch/v1';
const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;
const GOOGLE_CX = process.env.REACT_APP_GOOGLE_CX;

export function getReq(query: string, searchEngine: SearchEngine): Req {
  if (searchEngine === SearchEngine.Google) {
    return {
      url: `${GOOGLE_BASE_URL}?key=${GOOGLE_KEY}&cx=${GOOGLE_CX}&q=${query}`,
    };
  } else {
    return {
      url: `${BING_BASE_URL}?customconfig=${BING_CUSTOM_CONFIG}&mkt=en-US&q=${query}`,
      headers: { headers: { 'Ocp-Apim-Subscription-Key': BING_KEY } },
    };
  }
}
