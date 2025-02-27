import { CollectionReference } from './Collection';

export interface MediaItem {
  id: string;
  title?: string;
  loadTitle?: string;
  alias?: string;
  imdb?: string;
  tags: string[];
  path: string;
  duration?: number;
  durationLimit?: number;
  collections?: CollectionReference[];
  episodes?: EpisodeItem[];
}

export interface EpisodeItem {
  id: string;
  title: string;
  alias?: string;
  imdb?: string;
  tags: string[];
}
