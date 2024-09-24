
 import ThemeProvider from './theme';
import Router from './routes/sections';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
