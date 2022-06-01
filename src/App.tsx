import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './Routes';
import { GlobalThemeProvider } from './_global/hooks/useAppTheme';

export function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalThemeProvider>
          <Header title="ShopGames" />
          <Routes />
        </GlobalThemeProvider>
      </BrowserRouter>
    </>
  );
}
