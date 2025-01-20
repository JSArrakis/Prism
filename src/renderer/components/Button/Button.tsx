import { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  style?: CSSProperties;
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, style, children, className }) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
