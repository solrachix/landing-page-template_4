/** @jsx jsx */
import { jsx, Text } from 'theme-ui';

const Switch = ({ isMonthly, handlePlan }) => {
  return (
    <button sx={styles.switch} onClick={handlePlan}>
      <Text as="span" variant="styles.srOnly">
        Toggle Plan
      </Text>
      <span sx={styles.button} className={isMonthly ? '' : 'right'} />
    </button>
  );
};

export default Switch;

const styles = {
  switch: {
    backgroundColor: 'primary',
    borderRadius: 50,
    border: 0,
    cursor: 'pointer',
    height: 31,
    px: '3px',
    mx: [3],
    minWidth: 50,
    position: 'relative',
  },
  button: {
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(50, 84, 103, 0.25)',
    borderRadius: 50,
    display: 'block',
    height: 26,
    position: 'absolute',
    transition: 'all 0.3s ease-in-out 0s',
    left: 0,
    top: '2px',
    width: 26,
    transform: 'translateX(3px)',
    '&.right': {
      transform: 'translateX(21px)',
    },
  },
};
