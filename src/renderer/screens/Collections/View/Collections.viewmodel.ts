import { useState } from 'react';
import useRootStack from '@navigation/useRootStack';

interface CollectionsData {}
interface CollectionsActions {}

export interface CollectionsViewModel extends CollectionsData, CollectionsActions {}

const useCollectionsViewModel = (
  navigate: ReturnType<typeof useRootStack>,
): CollectionsViewModel => {
  return {};
};

export default useCollectionsViewModel;
