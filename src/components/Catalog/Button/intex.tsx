import { ButtonHTMLAttributes } from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { Container } from './styled';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  quantity?: number;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ title = 'Button', quantity = 1, isLoading = false, ...rest }: IButton) {
  return (
    <>
      <Container {...rest}>
        <div className="icon">
          <BsCartPlus />
          {quantity > 0 && <span>{quantity}</span>}
        </div>
        <div className="title">{title}</div>
      </Container>
    </>
  );
}
