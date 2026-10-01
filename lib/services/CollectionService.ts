import { Collection } from '../types';
import { COLLECTIONS } from '../data/mockData';

export class CollectionService {
  static async getCollections(): Promise<Collection[]> {
    return Promise.resolve(COLLECTIONS);
  }

  static async getCollectionBySlug(slug: string): Promise<Collection | undefined> {
    return Promise.resolve(COLLECTIONS.find((c) => c.slug === slug));
  }
}
