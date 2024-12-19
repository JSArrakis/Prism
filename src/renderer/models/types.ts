export interface APIMessageResponse<T> {
  message: string;
  data: T;
}

interface PaginatedRequestMetadata {
  limit?: number | null;
  offset?: number | null;
  nextUrl?: string | null;
}

export interface APIPaginatedMessage<T> extends APIMessageResponse<T> {
  paging?: PaginatedRequestMetadata;
}

export interface APIEmptyMessage {}
