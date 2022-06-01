import { IconType } from 'react-icons';
import { BsEmojiFrown } from 'react-icons/bs';
import { Container } from './styled';

interface MessageProps {
  icon?: IconType;
  message?: string;
  color?: string;
}

export function Message({ icon: Icon = BsEmojiFrown, message = 'Message', color }: MessageProps) {
  return (
    <>
      <Container color={color}>
        <div className="content">
          <Icon />
          <h3>{message}</h3>
        </div>
      </Container>
    </>
  );
}
