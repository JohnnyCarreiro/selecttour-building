import { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Header } from '../Header'

import { Container } from './styles'

interface BackgroundProps {
  children?: ReactNode;
}

export const Showcase = ({ children }: BackgroundProps) => {
  return (
    <Container>
      <div className="showcase">
        <Header />
        <video src="assets/experience.webm" muted loop autoPlay></video>
        <div className="overlay"></div>
        {children}
        <ul className="social">
          <li><a href={process.env.NODE_ENV_FACEBOOK}><FaFacebook /></a></li>
          <li><a href={process.env.NODE_ENV_INSTAGRAM}><FaInstagram /></a></li>
          <li><a href={process.env.NODE_ENV_WHATSAPP}><FaWhatsapp /></a></li>
        </ul>
      </div>
    </Container>
  )
}

