import { NameDto } from '@/core/types/core.types';

export interface Review {
  id: string;
  name: NameDto;
  image?: string;
  review: string;
}
