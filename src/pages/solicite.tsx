import { ReactNode } from 'react'
import Head from 'next/head'

import { Container } from '../styles/Solicite'
import { Menu } from '@/components/Menu'
import { Showcase } from '@/components/Showcase'
import { RequestForm } from '@/components/RequestForm'

interface SoliciteProps {
  children: ReactNode;
}

function Solicite({ children }: SoliciteProps) {
  const formFields = {
    name_label: 'Nome e Sobrenome',
    name_field: 'Nome e Sobrenome',
    email_label: 'Email',
    email_field: 'Email',
    phone_label: 'Telefone',
    phone_field: 'Telefone',
    from_label: 'Origem',
    from_field: 'Origem',
    to_label: 'Destino',
    to_field: 'Destino',
    departure_label: 'Partida',
    departure_field: 'Partida',
    returns_label: 'Retorn',
    returns_field: 'Retorn',
    adults_label: 'Adultos',
    adults_field: 'Adultos',
    child_label: 'Crianças',
    child_field: 'Crianças',
    class_label: 'Classe',
    class_field: 'Classe',
    accomodatio_label: 'Acomodações',
    accomodation_field: 'Acomodações',
    observations_label: 'Observações',
    observations_field: 'Observações',
    whatsapp_message: ''
  }
  return (
    <Container>
      <Head>
        <title>Select Tour - Solicite um contato</title>
      </Head>
      <Showcase>
        <div className="content">
          <div className="text">
            <h2>Contato Aqui</h2>
          </div>
          <div className="request-form">
            <RequestForm form_fields={formFields} />
          </div>
        </div>
      </Showcase>
      <Menu />
    </Container>
  );
}

export default Solicite
