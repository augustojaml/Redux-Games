import { ButtonHTMLAttributes } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { Loading } from '../../Loader';
import { Container } from './styled';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  quantity?: number;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ title = 'Button', quantity = 0, isLoading = false, ...rest }: IButton) {
  const theme = useTheme();

  return (
    <>
      <Container {...rest}>
        <div className="icon">
          <BsCartPlus />
          {quantity > 0 && <span>{quantity}</span>}
        </div>
        <div className="title">{isLoading ? <Loading color={theme.colors.main002} /> : title}</div>
      </Container>
    </>
  );
}
