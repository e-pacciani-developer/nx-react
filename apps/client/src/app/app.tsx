// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@mui/material';
import { FancyButton } from '@reactmonorepo/ui';
import { environment } from '../environments/environment';
import { theme } from './theme';

export function App() {
  const mySting = environment.MY_STRING;

  return (
    <ThemeProvider theme={theme}>
      <FancyButton
        color="beautiful"
        variant="contained"
        label={mySting + ' sbrosi'}
      />
    </ThemeProvider>
  );
}

export default App;
