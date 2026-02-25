import type { Size } from './common';

export type IconPath = { d: string; fill?: string; class?: string };

export interface IconProps {
  color?: string;
  disabled?: boolean;
  preffix?: string;
  viewBox?: string;
  icon?: Array<IconPath> | IconPath | string;
  size?: Size;
}
