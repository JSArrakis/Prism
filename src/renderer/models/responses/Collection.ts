export interface Collection {
  id: string;
  title: string;
  description: string;
  items: CollectionItem[];
}

export interface CollectionItem {
  sequence: number;
  mediaItemId: string;
}

export interface CollectionReference {
  id: string;
  title: string;
  sequence: number;
}
