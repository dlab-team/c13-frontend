import React from 'react';
import Footer from '../Footer';

export default function creditos() {

  let teamMembers = [
    

    {
      id: 1,
      name: 'Eliecer Calderón',
      role: 'Diseñador UX UI',
      image: '/images/image 3.png',
      linkedInUrl: 'https://www.linkedin.com/in/eliecer-calderon/',
      githubUrl: 'https://www.behance.net/eliecercalderon',
      imageRed: '/images/behance.png'
    },

    {
      id: 2,
      name: 'Luis Molina',
      role: 'Desarrollador Fullstack',
      image: '/images/image 4.png',
      linkedInUrl: 'https://www.linkedin.com/in/molina-luis/',
      githubUrl: 'https://github.com/goluismolina',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 3,
      name: 'Mauricio Vera',
      role: 'Desarrollador Fullstack',
      image: '/images/image 5.png',
      linkedInUrl: 'https://www.linkedin.com/in/mauricio-vera-rodriguez/',
      githubUrl: 'https://github.com/mauricioverar',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 4,
      name: 'Matías Molina',
      role: 'Desarrollador Fullstack',
      image: '/images/image 6.png',
      linkedInUrl: 'https://www.linkedin.com/in/matiasmfdez/',
      githubUrl: 'https://github.com/matiasmfdez',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 5,
      name: 'Gastón Toledo',
      role: 'Desarrollador Fullstack',
      image: '/images/image 7.png',
      linkedInUrl: '#',
      githubUrl: 'https://github.com/GastonTB',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 6,
      name: 'Javier Arroyo',
      role: 'Desarrollador Fullstack',
      image: '/images/image 10.png',
      linkedInUrl: 'https://www.linkedin.com/in/javier-arroyo-guerra-80232b212/',
      githubUrl: 'https://github.com/BotDeIA',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 7,
      name: 'Mixzio González',
      role: 'Desarrollador Fullstack',
      image: '/images/image 11.png',
      linkedInUrl: 'https://www.linkedin.com/in/mxzgnth-989176185/',
      githubUrl: 'https://github.com/MxzGnTh',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 8,
      name: 'Javier González',
      role: 'Desarrollador Fullstack',
      image: '/images/image 2.png',
      linkedInUrl: 'https://www.linkedin.com/in/javiergonzalez23/',
      githubUrl: 'https://github.com/javiergp23',
      imageRed: '/images/logo_github.png'
    },
    {
      id: 9,
      name: 'Ezequiel Orazi',
      role: 'Desarrollador Fullstack',
      image: '/images/image 9.png',
      linkedInUrl: 'https://www.linkedin.com/in/ezequiel-orazi32',
      githubUrl: 'https://github.com/Ezzeorazi',
      imageRed: '/images/logo_github.png'
    },
    {
      id: 10,
      name: 'Leonardo José',
      role: 'Technical Leader',
      image: '/images/image 8.png',
      linkedInUrl: 'https://www.linkedin.com/in/leonardo-josé-castillo-lacruz-4911571a/',
      githubUrl: 'https://github.com/ljcl79',
      imageRed: '/images/logo_github.png'
    },

    {
      id: 11,
      name: 'Giancarlo Noseda',
      role: 'Product Owner',
      image: '/images/image 12.png',
      linkedInUrl: '#',
      githubUrl: '#',
      imageRed: '/images/logo_github.png'
    },
  ];

  
  const shuffledMembers = teamMembers
    .filter(member => member.id !== 10 && member.id !== 11)
    .sort(() => Math.random() - 0.5)
    .concat(teamMembers.filter(member => member.id === 10 || member.id === 11));
  
  return (
    <>
      <div className='container mt-5'>
        <h1
          style={{
            fontWeight: '700',
            fontStyle: 'italic',
            fontSize: '55px',
            marginBottom: '80px',
            textAlign: 'center',
            color: '#729E2E',
          }}
        >
          Nuestro equipo
        </h1>
        <div className='text-center__caracters'>
          <p>
            'Queremos reconocer y destacar el excepcional trabajo de estos
            talentosos profesionales que dedicaron su experiencia y pasión a la
            construcción de este sitio dedicado al aprendizaje de lenguajes de
            programación. Su profesionalismo y compromiso han sido fundamentales
            para lograr un estándar de excelencia en cada aspecto de su labor.
            Agradecemos sinceramente su contribución, la cual ha sido esencial
            para hacer de este espacio un recurso invaluable para la comunidad
            de aprendices y desarrolladores. ¡Su dedicación ha marcado la
            diferencia y les agradecemos por su arduo trabajo!'
          </p>
        </div>

        <div className='row container__characters'>
          { shuffledMembers.map((member) => (
            <div key={member.id} className='col-sm-12 col-md-6 col-lg-4 mb-4 '>
              <div className='card h-100 member-card'>
                <img
                  src={member.image}
                  className='card-img-top mb-2'
                  alt={member.name}
                  style={{
                    height: '180px',
                    objectFit: 'cover',
                    width: '180px',
                    textAlign: 'center',
                  }}
                />
                <div className='border-style'>
                  <div className='card d-flex flex-column card__name'>
                    <h5 className='card-title '>{member.name}</h5>
                    <p className='card-text'>{member.role}</p>
                  </div>
                  <div className='social-icons'>
                    <a
                      href={member.linkedInUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src='/images/logo_linkedin.png' alt='LinkedIn' />
                    </a>
                    <a
                      href={member.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={member.imageRed} alt='GitHub' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
