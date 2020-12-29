import { SearchEngine } from './constants';

interface ResultItem {
  name: string;
  url: string;
}

export function parseResults(
  searchEngine: SearchEngine,
  result: any
): ResultItem[] {
  if (searchEngine === SearchEngine.Google) {
    return result.items?.map((item: any) => ({
      name: item.title,
      url: item.link,
    }));
  } else {
    return result.webPages?.value?.map((item: any) => ({
      name: item.name,
      url: item.url,
    }));
  }
}
