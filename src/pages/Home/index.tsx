import { Banner } from '../../components/Banner';
import { Catalog } from '../../components/Catalog';
import { Footer } from '../../components/Footer';
import { Container } from './styled';

export function Home() {
  return (
    <>
      <Container>
        <Banner title="My Shop Game" subtitle="Come and discover our news" />
        <Catalog />
        <Footer title="copyright © all rights reserved" />
      </Container>
    </>
  );
}
