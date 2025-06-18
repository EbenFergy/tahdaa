import Categories from '@/core/components/Categories';
import Hero from '@/core/components/Hero';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Hero />
      <Categories />
    </Box>
  );
}
