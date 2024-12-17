import { FC } from 'react';
import { SplashViewModel } from './Splash.viewmodel';
import useStyles from './Splash.styles';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface SplashViewProps {
  viewModel: SplashViewModel;
}
const SplashView: FC<SplashViewProps> = ({ viewModel }) => {
  const styles = useStyles();

  const {} = viewModel;

  return <div css={css(styles.screen)}>Splash Screen</div>;
};

export default SplashView;
