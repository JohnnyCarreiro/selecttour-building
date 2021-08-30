import { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home'

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useEffect } from 'react'

export default function Home() {
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
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <section className="showcase">
        <header>
          <img className="logo" width={'auto'} height={50} src="/assets/images/LOGO.svg" alt="Logo Select Tour" />
          <div className="toggle"></div>
        </header>
        <video src="assets/experience.webm" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Mais que uma simples viagem</h2>
          <br/>
          <h3>Estamos trabalhando para melhorar a sua experiência</h3>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Sapien in monti palavris qui num significa nadis i pareci latim. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
          </p>
          <a href="http://loacalhost:3000/#" rel="noopener noreferrer">Saiba mais</a>
        </div>
        <ul className="social">
          <li><a href=""><FaFacebook /></a></li>
          <li><a href=""><FaInstagram /></a></li>
          <li><a href=""><FaWhatsapp /></a></li>
        </ul>
      </section>
      <div className="menu">
        <ul>
          <li><a href="">itmen 1</a></li>
          <li><a href="">itmen 2</a></li>
          <li><a href="">itmen 3</a></li>
        </ul>
      </div>
    </Container>
  )
}
