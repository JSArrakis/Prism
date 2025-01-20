import { useState } from 'react';
import useRootStack from '@navigation/useRootStack';

interface MoviesData {}
interface MoviesActions {}

export interface MoviesViewModel extends MoviesData, MoviesActions {}

const useMoviesViewModel = (
  navigate: ReturnType<typeof useRootStack>,
): MoviesViewModel => {
  return {};
};

export default useMoviesViewModel;
