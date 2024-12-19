import { FC, CSSProperties } from 'react';
import styles from './ActivityBar.module.css';

interface ActivityBarProps {
  barStyle?: CSSProperties;
  pulseStyle?: CSSProperties;
}

const ActivityBar: FC<ActivityBarProps> = ({ barStyle, pulseStyle }) => {
  return (
    <div className={styles.activityBar} style={barStyle}>
      <div className={styles.pulse} style={pulseStyle}></div>
    </div>
  );
};

export default ActivityBar;
