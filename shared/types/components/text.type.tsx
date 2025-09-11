export interface TextProps {
  children: React.ReactNode;
  variant: 'display' | 'headline' | 'title' | 'subtitle' | 'body' | 'label' | 'headlinecustom';
  weight?: 'light' | 'normal' | 'bold';
  color?: string;
  textColor?: 'color-text-black' | 'color-text-white' | 'color-text-gray' | 'color-text-primary' | 'color-text-secondary';
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}