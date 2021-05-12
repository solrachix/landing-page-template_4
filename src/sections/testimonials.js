
import dynamic from 'next/dynamic';/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar1 from 'assets/images/testimonials/1.png';
import avatar2 from 'assets/images/testimonials/2.png';
import avatar3 from 'assets/images/testimonials/3.png';
import avatar4 from 'assets/images/testimonials/4.png';
import avatar5 from 'assets/images/testimonials/5.png';
import avatar6 from 'assets/images/testimonials/6.png';
import avatar7 from 'assets/images/testimonials/7.png';
import avatar8 from 'assets/images/testimonials/8.png';

const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Veona Watson',
      username: '@hi.veona',
      text: `Gostaria apenas de cumprimentar Estelle Pestana. Ela tem sido muito profissional e não mede esforços para me ajudar. Sua paciência comigo enquanto eu continuamente mudava meus planos deve ser elogiada. Seu serviço reafirma por que eu sempre escolho reservar por meio de uma agência em vez de diretamente. Obrigada`,
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Minnie Horn',
      username: '@hello.mimmie',
      text: `Gostaria de aproveitar esta oportunidade para agradecer à SA Places pelo excelente serviço prestado a nós e em particular a Estelle. Você me deu o melhor lugar de todos alguns momentos depois que falei com você.`,
    },
  ],
  [
    {
      id: 3,
      avatar: avatar3,
      name: 'Merryn Manley',
      username: '@merryn.manley',
      text: `Muito obrigado pelo seu serviço amável e eficiente. Já recomendei e com certeza continuarei recomendando seus serviços a outras pessoas no futuro.`,
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'Paseka Nku',
      username: '@hey.nku',
      text: `Gostaria apenas de cumprimentar Estelle Pestana. Ela tem sido muito profissional e não mede esforços para me ajudar. Sua paciência comigo enquanto eu continuamente mudava meus planos deve ser elogiada. Seu serviço reafirma por que eu sempre escolho reservar por meio de uma agência em vez de diretamente. Obrigada`,
    },
  ],
  [
    {
      id: 5,
      avatar: avatar5,
      name: 'Cherice Justin',
      username: '@cherice.me',
      text: `Obrigado por toda sua ajuda. Seu serviço foi excelente e muito RÁPIDO.`,
    },
    {
      id: 6,
      avatar: avatar6,
      name: 'Thais Carballal',
      username: '@myself.thais',
      text: `Para a nossa recente viagem a S.A., reservei várias acomodações através do SA Places. Só queria dizer que tudo correu perfeitamente com todas as reservas e também a sua reserva foi muito rápida e profissional. Espero ter a oportunidade de visitar novamente a África do Sul em breve, então farei minhas reservas com sua empresa novamente. Eu também irei recomendar`,
    },
  ],
  [
    {
      id: 7,
      avatar: avatar7,
      name: 'Veona Watson',
      username: '@hi.veona',
      text: `Gostaria apenas de cumprimentar Estelle Pestana. Ela tem sido muito profissional e não mede esforços para me ajudar. Sua paciência comigo enquanto eu continuamente mudava meus planos deve ser elogiada. Seu serviço reafirma por que eu sempre escolho reservar por meio de uma agência em vez de diretamente. Obrigada`,
    },
    {
      id: 8,
      avatar: avatar8,
      name: 'Minnie Horn',
      username: '@hello.mimmie',
      text: `Gostaria de aproveitar a oportunidade para agradecer à SA Places pelo excelente serviço prestado a nós e em particular a Estelle. Você me deu o melhor lugar de todos alguns momentos depois que falei com você.`,
    },
  ],
  [
    {
      id: 9,
      avatar: avatar1,
      name: 'Merryn Manley',
      username: '@merryn.manley',
      text: `Muito obrigado pelo seu serviço amável e eficiente. Já recomendei e com certeza continuarei recomendando seus serviços a outras pessoas no futuro.`,
    },
    {
      id: 10,
      avatar: avatar2,
      name: 'Paseka Nku',
      username: '@hey.nku',
      text: `Gostaria apenas de cumprimentar Estelle Pestana. Ela tem sido muito profissional e não mede esforços para me ajudar. Sua paciência comigo enquanto eu continuamente mudava meus planos deve ser elogiada. Seu serviço reafirma por que eu sempre escolho reservar por meio de uma agência em vez de diretamente. Obrigada`,
    },
  ],
  [
    {
      id: 11,
      avatar: avatar3,
      name: 'Cherice Justin',
      username: '@cherice.me',
      text: `Obrigado por toda sua ajuda. Seu serviço foi excelente e muito RÁPIDO.`,
    },
    {
      id: 12,
      avatar: avatar4,
      name: 'Thais Carballal',
      username: '@myself.thais',
      text: `Para a nossa recente viagem a S.A., reservei várias acomodações através do SA Places. Só queria dizer que tudo correu perfeitamente com todas as reservas e também a sua reserva foi muito rápida e profissional. Espero ter a oportunidade de visitar novamente a África do Sul em breve, então farei minhas reservas com sua empresa novamente. Eu também irei recomendar`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="O que o cliente fala sobre nós"
          description="Depoimento de cliente"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
