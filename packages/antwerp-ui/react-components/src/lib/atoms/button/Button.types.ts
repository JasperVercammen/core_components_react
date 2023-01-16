import { MouseEventHandler } from 'react';
import { AvatarProps } from '../avatar';

export interface ButtonProps {
  ariaLabel?: string;
  avatar?: ButtonAvatarProps;
  children?: React.ReactNode;
  fullWidth?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  icon?: string;
  iconLeft?: string;
  iconRight?: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  outline?: boolean;
  qa?: string;
  size?: 'small' | 'medium' | 'large';
  spinner?: boolean;
  theme?: 'success' | 'warning' | 'danger' | 'neutral';
  title?: string;
  transparent?: boolean;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
}

export type ButtonAvatarProps = Omit<AvatarProps, 'rounded' | 'size'>;
