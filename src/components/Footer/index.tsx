import { Container, Title } from './styled';

interface IFooterProps {
  title?: string;
}

export function Footer({ title = 'Footer' }: IFooterProps) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
      </Container>
    </>
  );
}
