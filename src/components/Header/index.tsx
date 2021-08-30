import { ReactNode, useEffect, useState } from 'react'

import { Container } from './styles'

interface HeaderProps {
  children?: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  const [_document, setDocument] = useState<Document | null>(null)

  useEffect(()=>{
    setDocument(() => document)
    const menuToggle = _document?.querySelector('.toggle')
    const showcase = _document?.querySelector('.showcase')

    menuToggle?.addEventListener('click', () => {
      menuToggle.classList.toggle('active')
      showcase?.classList.toggle('active')
    })

  },[_document])
  return (
    <Container>
      <img className="logo" width={'auto'} height={50} src="/assets/images/LOGO.svg" alt="Logo Select Tour" />
      <div className="toggle"></div>
    </Container>
  );
};

