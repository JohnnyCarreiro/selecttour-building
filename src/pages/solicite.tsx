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
    name_label: '',
    name_field: '',
    email_label: '',
    email_field: '',
    phone_label: '',
    phone_field: '',
    company_label: '',
    company_field: '',
    subject_label: '',
    subject_field: '',
    message_label: '',
    message_field: '',
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
