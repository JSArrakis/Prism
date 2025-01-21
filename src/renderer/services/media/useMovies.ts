import { useQuery } from '@tanstack/react-query';
import { Movie } from '../../models/responses';
import httpClient from '../api/httpClient';
import { HOURS, retry } from '../utils/queryHelpers';

export function useMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: () => httpClient.get<Movie[]>({ path: 'get-all-movies' }),
    staleTime: 6 * HOURS,
    retry,
  });
}
