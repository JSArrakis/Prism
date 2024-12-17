import useRootStack from '@navigation/useRootStack';

interface SplashData {}
interface SplashActions {}

export interface SplashViewModel extends SplashData, SplashActions {}

const useSplashViewModel = (
  navigate: ReturnType<typeof useRootStack>,
): SplashViewModel => {
  return {};
};

export default useSplashViewModel;
