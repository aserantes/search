import { SearchEngine } from "./constants";

interface Headers {
  headers?: {
    'Ocp-Apim-Subscription-Key'?: string
  }
}

interface Req {
  url: string,
  headers?: Headers
}

// These keys are not secret, I've just made them for this quick challenge.
// In actual projects all secret keys live on the backend as environment variables.
const BING_KEY = 'df0201d8114a4a8f89c227a5ab61a803';
const BING_BASE_URL = 'https://api.bing.microsoft.com/v7.0/custom/search';
const BING_CUSTOM_CONFIG = 'cc6b474e-853e-427f-90fa-33fc3afa9b98';

const GOOGLE_KEY = 'AIzaSyBgwnQzmtPC01miAuDP5hk-agqIz_q_EVY';
const GOOGLE_BASE_URL = 'https://customsearch.googleapis.com/customsearch/v1';
const GOOGLE_CX = 'fdab44453e3f986dc';

export function getReq(query: string, searchEngine: SearchEngine): Req {

  if (searchEngine === SearchEngine.Google) {
    return {
      url: `${GOOGLE_BASE_URL}?key=${GOOGLE_KEY}&cx=${GOOGLE_CX}&q=${query}`
    }
  } else {
    return {
      url: `${BING_BASE_URL}?customconfig=${BING_CUSTOM_CONFIG}&mkt=en-US&q=${query}`,
      headers: {headers: {'Ocp-Apim-Subscription-Key': BING_KEY}}
    }
  }
}