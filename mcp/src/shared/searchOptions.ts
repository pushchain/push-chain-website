import type { Options } from 'minisearch';

/**
 * The document shape stored in the MiniSearch index. The same options
 * object MUST be used when building the index and when loading it at
 * runtime, otherwise MiniSearch.loadJSON rejects or misbehaves. Keeping
 * both sides on this single module prevents drift.
 */
export interface IndexedDoc {
  id: string;
  title: string;
  headings: string;
  plain: string;
  section: string;
  path: string;
  description: string;
}

export const SEARCH_FIELDS: ReadonlyArray<keyof IndexedDoc> = ['title', 'headings', 'plain'];

export const STORE_FIELDS: ReadonlyArray<keyof IndexedDoc> = [
  'title',
  'section',
  'path',
  'description',
  'plain',
];

export function miniSearchOptions(): Options<IndexedDoc> {
  return {
    idField: 'id',
    fields: [...SEARCH_FIELDS],
    storeFields: [...STORE_FIELDS],
  };
}
