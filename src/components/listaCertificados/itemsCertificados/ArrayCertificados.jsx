import React from 'react'


export default function ArrayCertificados() {

  const certificados = [
    { img: 'src/assets/imgCertificados/imgCurso1.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso2.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso3.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso4.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso5.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso6.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso7.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso8.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso9.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso10.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso11.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso12.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso13.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso14.jpg' },
    { img: 'src/assets/imgCertificados/imgCurso15.jpg' }
  ]

  console.log(certificados)

  return (
    <div className=''>
      {certificados.map((item, idx) => (
        <img key={idx} src={item.img} alt='' />
      ))}
    </div>
  )

}
