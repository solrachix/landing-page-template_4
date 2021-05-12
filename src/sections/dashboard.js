/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import Cog from 'components/icons/cog';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
import dashboard from 'assets/images/dashboard.png';

const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: 'Visão geral do orçamento',
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `Recurso de primeira qualidade que melhora a classificação e o desempenho do seu site`,
        description: `Construa um local de trabalho incrível e expanda seus negócios com a plataforma tudo-em-um da Gusto com conteúdos incríveis. Faça a entrega de seus testes em let home coletar amostras da vitória do sistema de design de suprimentos.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: 'Criar & ajustar',
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `Recurso de segunda qualidade que melhora a classificação e o desempenho do seu site`,
        description: `Construa um local de trabalho incrível e expanda seus negócios com a plataforma tudo-em-um da Gusto com conteúdos incríveis. Faça a entrega de seus testes em let home coletar amostras da vitória do sistema de design de suprimentos.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: 'Ver relatórios',
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `Recurso de terceira qualidade que aumenta a classificação e o desempenho do seu site`,
        description: `Construa um local de trabalho incrível e expanda seus negócios com a plataforma tudo-em-um da Gusto com conteúdos incríveis. Faça a entrega de seus testes em let home coletar amostras da vitória do sistema de design de suprimentos.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <Suitcase />,
        title: 'Otimize o site',
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `Recurso de quarta qualidade que melhora a classificação e o desempenho do seu site`,
        description: `Construa um local de trabalho incrível e expanda seus negócios com a plataforma tudo-em-um da Gusto com conteúdos incríveis. Faça a entrega de seus testes em let home coletar amostras da vitória do sistema de design de suprimentos.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 5,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'Painel Personalizado',
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `Quinto recurso de qualidade que melhora a classificação e o desempenho do seu site`,
        description: `Construa um local de trabalho incrível e expanda seus negócios com a plataforma tudo-em-um da Gusto com conteúdos incríveis. Faça a entrega de seus testes em let home coletar amostras da vitória do sistema de design de suprimentos.`,
        readMore: '#introduce-quality',
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 30, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
              <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: ['none !important'],
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: 'white',
    '.rc-tabs-nav': {
      mb: [8, null, null, 7, 10, null, 12],
    },
    '.rc-tabs-nav-wrap': {
      '::before': {
        backgroundColor: rgba('#fff', 0.1),
        content: ['none', null, null, `''`],
        height: 1,
        position: 'absolute',
        left: 0,
        top: 51,
        width: '100%',
      },
      '::after': {
        borderColor: ['primary'],
      },
    },
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      fontSize: [null, null, null, 15, 2],
    },
    '.rc-tabs-tab-active': {
      'svg g, svg path': {
        fill: 'primary',
        opacity: 1,
      },
      h5: {
        color: 'primary',
      },
    },
    '.rc-tabs-ink-bar': {
      backgroundColor: 'primary',
      borderRadius: 5,
      bottom: [47],
      display: ['none', null, null, 'block'],
    },
    '.rc-tabs-tabpane': {
      outline: '0 none',
    },
  },
};
