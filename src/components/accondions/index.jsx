import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import ArrayCertificados from '../listaCertificados/itemsCertificados/ArrayCertificados';
import './index.scss'

export default function Accordions({activeIndex, setActiveIndex}) {
  return (
    <Accordion activeIndex={activeIndex} className='containerCertificados'>
      <AccordionTab header="Alura Cursos" className='certificadosAlura'>
        <ArrayCertificados />
      </AccordionTab>
      <AccordionTab header="Curso em Vídeo">
        Em Andamento
      </AccordionTab>
    </Accordion>
  )
}
