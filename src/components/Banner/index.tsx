import { IconType } from 'react-icons';
import { IoGameControllerOutline } from 'react-icons/io5';

import { Container, Content } from './styled';

interface IBannerProps {
  title?: string;
  subtitle?: string;
  icon?: IconType;
}

export function Banner({
  icon: Icon = IoGameControllerOutline,
  title = 'Banner Title',
  subtitle = 'Banner Subtitle',
}: IBannerProps) {
  return (
    <>
      <Container>
        <Content>
          <Icon />
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Content>
      </Container>
    </>
  );
}
