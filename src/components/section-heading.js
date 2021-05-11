/** @jsx jsx */
import { jsx, Box, Heading, Text, Image } from 'theme-ui';

const SectionHeading = ({ title, description, emoji, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Heading sx={styles.title}>
        {emoji ? <span>{title}</span> : title}
        {emoji && <Image src={emoji} alt="emoji" />}
      </Heading>
      <Text as="p" sx={styles.description}>
        {description}
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: '0 auto 30px',
  },
  title: {
    color: 'heading',
    fontWeight: 600,
    fontSize: [6, null, null, null, null, null, 40],
    lineHeight: [1.33, 1.33, 1.5],
    letterSpacing: ['-1.5px', null, null, null, null, 0, '-1.5px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
      maxWidth: [25, null, null, '100%'],
    },
  },
  description: {
    color: 'heading',
    fontSize: ['14px', null, '16px'],
    lineHeight: [1.86, null, 2.2],
    mt: [5],
    maxWidth: 470,
  },
};
