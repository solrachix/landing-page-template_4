/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/messenger.png';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Organize o conteúdo do seu projeto',
    contents: (
      <div>
        Obtenha seus exames de sangue entregues em vamos coletar uma amostra da vitória de
        os gerentes que fornecem as melhores diretrizes de sistema de design de todos os tempos.
      </div>
    ),
  },
  {
    title: 'Colabore seus documentos facilmente',
    contents: (
      <div>
        Obtenha seus exames de sangue entregues em vamos coletar uma amostra da vitória de
        os gerentes que fornecem as melhores diretrizes de sistema de design de todos os tempos.
      </div>
    ),
  },
  {
    title: `Construa a base de conhecimento de sua equipe`,
    contents: (
      <div>
        Obtenha seus exames de sangue entregues em vamos coletar uma amostra da vitória de
        os gerentes que fornecem as melhores diretrizes de sistema de design de todos os tempos.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Conheça nossos recursos premium que o farão impressionar"
              description="Construa um local de trabalho incrível e expanda seus negócios com a plataforma tudo-em-um da Gusto com conteúdos incríveis."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
