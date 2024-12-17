import { useMemo } from 'react';
import { css } from '@emotion/react';

const useStyles = () => {
  return useMemo(
    () => ({
      screen: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
      `,
    }),
    [],
  );
};

export default useStyles;
