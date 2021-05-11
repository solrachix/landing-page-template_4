/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id={`email-${id}`}
        placeholder="Insira o Endereço de Email"
      />
      <Button>{buttonLabel ?? 'Iniciar'}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
