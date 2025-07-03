import { Review } from '../types/reviews.types';

export const reviews: Review[] = [
  {
    id: 'review-1',
    name: {
      first: 'Olivia',
      last: 'Stone',
      full: 'Olivia Stone',
      preferred: 'Olivia',
    },
    image: 'https://res.cloudinary.com/dpr056mnn/image/upload/cld-sample.jpg',
    review: 'Amazing service! Quick response, professional approach, and great results. Highly recommended.',
  },
  {
    id: 'review-2',
    name: {
      first: 'James',
      last: 'Wright',
      full: 'James Wright',
      preferred: 'James',
    },
    image: 'https://res.cloudinary.com/dpr056mnn/image/upload/samples/upscale-face-1.jpg',
    review: 'Very satisfied with the work. Clean, efficient, and on time. Will definitely use Tahdaa again.',
  },
  {
    id: 'review-3',
    name: {
      first: 'Amara',
      last: 'Okeke',
      full: 'Amara Okeke',
      preferred: 'Amara',
    },
    image: 'https://res.cloudinary.com/dpr056mnn/image/upload/samples/woman-on-a-football-field.jpg',
    review:
      'Excellent experience. The professional was polite and fixed the issue faster than expected. Excellent experience. The professional was polite and fixed the issue faster than expected.',
  },
  {
    id: 'review-4',
    name: {
      first: 'Liam',
      last: 'Chen',
      full: 'Liam Chen',
      preferred: 'Liam',
    },
    image: 'https://res.cloudinary.com/dpr056mnn/image/upload/samples/man-portrait.jpg',
    review: 'Efficient and reliable. Booking was easy and the work was done without any hassle.',
  },
  {
    id: 'review-5',
    name: {
      first: 'Zoe',
      last: 'Anderson',
      full: 'Zoe Anderson',
      preferred: 'Zoe',
    },
    image: 'https://res.cloudinary.com/dpr056mnn/image/upload/samples/smile.jpg',
    review: 'Smooth process from start to finish. The app made everything so simple.',
  },
];
