import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './Routes';
import { GlobalThemeProvider } from './_global/hooks/useAppTheme';
import { store } from './_global/store';

export function App() {
  return (
    <>
      <GlobalThemeProvider>
        <BrowserRouter>
          <Provider store={store}>
            <Header title="ShopGames" />
            <Routes />
          </Provider>
        </BrowserRouter>
      </GlobalThemeProvider>
    </>
  );
}
