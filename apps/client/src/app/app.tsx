// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@mui/material';
import { FancyButton } from '@reactmonorepo/ui';
import { theme } from './theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <FancyButton color="beautiful" variant="contained" label="Beautiful!" />
    </ThemeProvider>
  );
}

export default App;
