export interface ServiceCardProps {
  image: string;
  category: string;
  rating: number;
  title: string;
  price: number;
  reviews?: number;
  href?: string;
  className?: string;
}
