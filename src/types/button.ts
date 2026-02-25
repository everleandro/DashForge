import type { Size } from './common';
import type { IconPath } from './icon';

// Alias para compatibilidad
export type ButtonSize = Size;

export type ButtonClassKeys =
  | "stacked"
  | "disabled"
  | "loading"
  | "fab"
  | "depressed"
  | "text"
  | "outlined"
  | "block"
  | "rounded"
  | "icon";

export interface ButtonProps {
  disabled?: boolean;
  link?: boolean;
  appendIcon?: Array<IconPath> | IconPath | string;
  prependIcon?: Array<IconPath> | IconPath | string;
  ripple?: boolean;
  loading?: boolean;
  color?: string;
  fab?: boolean;
  depressed?: boolean;
  text?: boolean;
  outlined?: boolean;
  block?: boolean;
  size?: Size;
  type?: string;
  rounded?: boolean;
  stacked?: boolean;
  icon?: Array<IconPath> | IconPath | string;
  height?: string | number;
  width?: string | number;
}

export const BUTTON_CLASS_MAP: Record<ButtonClassKeys, string> = {
  disabled: "v-btn--disabled",
  icon: "v-btn--icon",
  depressed: "v-btn--depressed",
  text: "v-btn--text",
  fab: "v-btn--fab",
  block: "v-btn--block",
  loading: "v-btn--loading",
  outlined: "v-btn--outlined",
  rounded: "v-btn--rounded",
  stacked: "v-btn--stacked",
};
