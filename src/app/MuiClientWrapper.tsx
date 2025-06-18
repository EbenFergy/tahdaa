'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/util/theme/theme';

const MuiClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiClientWrapper;
