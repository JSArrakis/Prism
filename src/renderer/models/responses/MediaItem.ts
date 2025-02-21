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
  franchizes?: string[];
}
