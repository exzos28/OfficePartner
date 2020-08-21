import React from 'react';
import { Box, Text } from '~/theme';
import { Button } from '~/components/atom';
import { useNavigation } from '@react-navigation/native';
import { Input } from '~/components/molecules';

export const PasswordRecovery = () => {
  const navigation = useNavigation();
  return (
    <Box
      flex={1}
      backgroundColor="lightGrey"
      padding="xl"
      justifyContent="center">
      <Box
        paddingVertical="l"
        paddingHorizontal="l"
        backgroundColor="white"
        borderRadius={6}
        shadowColor="dark"
        shadowOffset={{
          width: 0,
          height: 0,
        }}
        shadowOpacity={0.1}
        shadowRadius={1}
        elevation={2}>
        <Text marginBottom="s" variant="sectionTitle" textAlign="center">
          Восстановление пароля
        </Text>
        <Text marginBottom="l" textAlign="center" variant="sectionSubtitle">
          На ваш E-mail будет отправлен код
        </Text>
        <Box>
          <Input container={{ marginBottom: 'm' }} label="E-mail" />

          <Button
            variant="primary"
            text="Далее"
            onPress={() => navigation.navigate('PasswordRecoveryCode')}
          />

          <Button
            variant="link"
            text="Регистрация"
            onPress={() => navigation.navigate('Registration')}
          />
        </Box>
      </Box>
    </Box>
  );
};
