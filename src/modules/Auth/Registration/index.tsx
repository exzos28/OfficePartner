import React from 'react';
import {Box, Text} from '~/theme';
import {Button} from '~/components/atom';
import {Input} from '~/components/molecules';
import {useNavigation} from '@react-navigation/native';

export const Registration = () => {
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
        <Text marginBottom="xl" variant="sectionTitle" textAlign="center">
          Регистрация
        </Text>
        <Box>
          <Input container={{marginBottom: 'm'}} label="Название компании" />
          <Input container={{marginBottom: 'l'}} label="E-mail" />
          <Button
            variant="primary"
            text="Подтвердить"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            variant="link"
            text="Войти"
            onPress={() => navigation.navigate('Login')}
          />
        </Box>
      </Box>
    </Box>
  );
};
