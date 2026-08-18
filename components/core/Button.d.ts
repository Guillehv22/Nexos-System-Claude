export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
