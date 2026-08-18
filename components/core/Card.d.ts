export interface CardProps {
  children: React.ReactNode;
  /** Solid fills, or `outline` / `outline-inverse` for no fill with a colored border that sits harmoniously on its background. */
  fill?: 'white' | 'soft' | 'blue' | 'dark' | 'outline' | 'outline-inverse';
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
