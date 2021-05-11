/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Text } from 'theme-ui';

const TabTitle = ({ tab }) => {
  return tab.map(({ icon, title }, index) => (
    <Fragment key={index}>
      {icon}
      <Text as="p" sx={styles.title}>
        {title}
      </Text>
    </Fragment>
  ));
};

export default TabTitle;

const styles = {
  title: {
    fontSize: [16],
    fontWeight: 500,
    mt: [0, null, null, 5],
    ml: [3, null, null, 0],
    transition: '0.3s ease-in-out 0s',
  },
};
