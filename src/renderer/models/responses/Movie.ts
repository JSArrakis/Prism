export interface Movie {
  id: string;
  Title?: string;
  LoadTitle?: string;
  Alias?: string;
  IMDB?: string;
  Tags: string[];
  Path: string;
  Duration?: number;
  DurationLimit?: number;
  Collection?: string[];
  CollectionSequence?: number;
}
