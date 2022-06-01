import { Container } from './styled';
import ReactLoading, { LoadingType } from 'react-loading';
import { useTheme } from 'styled-components';

interface ILoadingProps {
  padding?: number;
  type?: LoadingType;
  size?: number;
  color?: string;
}

export function Loading({ padding, type = 'spin', size = 20, color }: ILoadingProps) {
  const theme = useTheme();

  return (
    <>
      <Container padding={padding}>
        <ReactLoading
          type={type}
          color={color ? color : theme.colors.secondary500}
          height={size}
          width={size}
        />
      </Container>
    </>
  );
}
