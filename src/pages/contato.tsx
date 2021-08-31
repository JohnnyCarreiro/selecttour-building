import { ReactNode } from 'react'
import Head from 'next/head'
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { Container } from '../styles/Contato'
import { Showcase } from '@/components/Showcase'
import { Menu } from '@/components/Menu'
import { ContactForm } from '@/components/contactForm'

interface ContatoProps {
  children?: ReactNode
}

const Contato = ({ children }: ContatoProps) => {
  const formFields = {
    name_label: 'Nome',
    name_field: 'Nome e Sobrenome',
    email_label: 'Email',
    email_field: 'Digite seu melhor endereço de email',
    phone_label: 'Telefone',
    phone_field: 'Telefone com DDD',
    subject_label: 'Assunto',
    subject_field: 'Assunto',
    message_label: 'Mensagem',
    message_field: 'Digite sua mensagem aqui',
    whatsapp_message: ''
  }
  return (
    <Container>
      <Head>
        <title>Select Tour - Contatos</title>
      </Head>
      <Showcase>
        <div className="content">
          <div className="text">
            <h2>Entre em contato</h2>
            <h3>Caso tenha alguma dúvida</h3>
            <p>
              Esta área é destinada para tirar suas dúvidas em relação aos nosso serviços, caso já tenha algum destino em mente e queira consultar nossos preços para passagens aéreas, hospegans em hoteis ou até mesmo pacotes completos, você pode solicitar este tipo de informação <a href={`${process.env.NODE_ENV_BASEURL}/solicite`}> <strong>aqui</strong> </a>
            </p>
            <div className="contacts">
              <ul>
                <li>
                  <FaEnvelope />
                  <a href="mailto:contato@selecttour.com.br">  contato@selecttour.com.br</a>
                </li>
                <li> <FaWhatsapp /><a href="">   12 99999-9999</a></li>
                <li> <FaInstagram /><a href="">   @selecttour</a></li>
              </ul>
            </div>
          </div>
          <div className="request-form">
            <ContactForm form_fields={formFields} />
          </div>
        </div>
      </Showcase>
      <Menu />
    </Container>
  )
}
export default Contato
