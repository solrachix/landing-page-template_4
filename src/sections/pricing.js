
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';/** @jsx jsx */
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Pacote de startup',
    subtitle: 'Para a equipe de startup que trabalha com a nova pilha de dados central',
    amount: {
      monthly: 25.99,
      annual: 25.99 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Comece o teste grátis',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Acesso final a todos os cursos, exercícios e avaliações',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Acesso gratuito para todo tipo de correções de exercícios com downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total de correções de avaliação com sistema de acesso de download gratuito`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Download ilimitado de cursos no conteúdo do aplicativo móvel`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Baixe e imprima cursos e exercícios em PDF`,
      },
    ],
  },
  {
    id: 2,
    title: 'Pacote Premium',
    subtitle: 'Para os usuários Pro que trabalham com stacks moderna',
    amount: {
      monthly: 49.99,
      annual: 49.99 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Comece o teste grátis',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Acesso final a todos os cursos, exercícios e avaliações',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Acesso gratuito para todo tipo de correções de exercícios com downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Download ilimitado de cursos no conteúdo do aplicativo móvel`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Baixe e imprima cursos e exercícios em PDF`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Que negócio combina perfeitamente com você"
          description="Conheça nossos planos"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Plano Mensal</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Plano Anual</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
