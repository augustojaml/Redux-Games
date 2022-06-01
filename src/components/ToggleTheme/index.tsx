import { useAppTheme } from '../../_global/hooks/useAppTheme';
import { Container } from './styled';

export function ToggleTheme() {
  const { toggleTheme, appTheme } = useAppTheme();

  return (
    <>
      <>
        <Container>
          <span>🌞</span>
          <span>🌛</span>
          <div className={appTheme.name === 'light' ? 'active' : ''} onClick={toggleTheme}></div>
        </Container>
      </>
    </>
  );
}
