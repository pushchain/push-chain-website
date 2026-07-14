import MiniSearch from 'minisearch';
import type { SearchIndexArtifact } from '../shared/types';
import type { IndexedDoc } from '../shared/searchOptions';
import { miniSearchOptions, SEARCH_FIELDS, STORE_FIELDS } from '../shared/searchOptions';

export function buildSearchIndex(docs: IndexedDoc[]): SearchIndexArtifact {
  const search = new MiniSearch<IndexedDoc>(miniSearchOptions());
  search.addAll(docs);
  return {
    engine: 'minisearch',
    options: {
      fields: [...SEARCH_FIELDS],
      storeFields: [...STORE_FIELDS],
    },
    index: JSON.stringify(search),
  };
}
