export interface ICardProps {
  title: string;
  text: string;
  buttonText: string;
  imageSrc?: string;
  specialTitle?: boolean;
  hideImage?: boolean;
  children?: React.ReactNode;
}
