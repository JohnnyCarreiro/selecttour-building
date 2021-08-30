import { ReactNode } from 'react'
import Head from 'next/head'

import { Container } from '../styles/Contato'
import { Showcase } from '@/components/Showcase'
import { Menu } from '@/components/Menu'

interface ContatoProps {
  children?: ReactNode
}

const Contato = ({ children }: ContatoProps) => {
  return (
    <Container>
      <Head>
        <title>Select Tour - Contatos</title>
      </Head>
      <Showcase>
        <div className="contato">
          <h2>Contato Aqui</h2>
        </div>
      </Showcase>
      <Menu />
    </Container>
  )
}
export default Contato
