import { ReactNode } from 'react'

import { Container } from './styles'

interface MenuProps {
  children?: ReactNode
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <Container>
      <div className="menu">
        <ul>
          <li><a href={`${process.env.NEXT_PUBLIC_BASEURL}/`}>Inicio</a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_BASEURL}/solicite`}>Solicite uma viagem</a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_BASEURL}/contato`}>Contato</a></li>
        </ul>
      </div>
    </Container>
  )
}
