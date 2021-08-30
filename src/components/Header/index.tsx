import { ReactNode } from 'react'

import { Container } from './styles'

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Container>
      <h1>Header</h1>
      {children}
    </Container>
  );
};

