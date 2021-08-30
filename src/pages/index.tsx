import Head from 'next/head'

import { Container } from '../styles/Home'
import { Menu } from '@/components/Menu'
import { Showcase } from '@/components/Showcase'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Select Tour - Mais que Viagens</title>
      </Head>
      <Showcase>
        <div className="text">
          <h2>Mais que uma simples viagem</h2>
          <br/>
          <h3>Estamos trabalhando para melhorar a sua experiência</h3>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
          </p>
          <a href={`${process.env.NEXT_PUBLIC_BASEURL}/#`} rel="noopener noreferrer">Saiba mais</a>
        </div>
      </Showcase>
      <Menu />
    </Container>
  )
}
