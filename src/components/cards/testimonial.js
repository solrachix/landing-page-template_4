/** @jsx jsx */
import { jsx, Box, Flex, Heading, Link } from 'theme-ui';
import Image from 'components/image';

const Testimonial = ({ data }) => {
  return (
    <Box sx={styles.testimonial}>
      <div sx={styles.quote}>{data.text}</div>
      <Flex sx={styles.author}>
        <Box as="figure">
          <Image src={data.avatar} alt={data.name} />
        </Box>
        <Box>
          <Heading as="h3">{data.name}</Heading>
          <Link href={data.username}>{data.username}</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Testimonial;

const styles = {
  testimonial: {
    backgroundColor: 'white',
    borderRadius: 5,
    p: '25px 35px 30px',
    transition: 'all 0.3s ease 0s',
    ':hover': {
      boxShadow: '0px 13px 40px rgba(75, 102, 135, 0.1)',
    },
    '+ div': {
      mt: [4],
    },
  },
  quote: {
    lineHeight: 1.88,
    color: 'text',
  },
  author: {
    mt: [6],
    figure: {
      mr: [3],
    },
    h3: {
      fontSize: '17px',
      lineHeight: 1.3,
      color: 'text',
    },
    a: {
      fontWeight: 500,
      fontSize: [1],
      lineHeight: 2.14,
      color: 'link',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
};
