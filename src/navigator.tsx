import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './screens/home';
import { ScreenName } from './constants';
import { SignIn, SignUp, ConfirmSignUp, ForgotPassword, ConfirmForgotPassword } from './screens/auth';

const Stack = createStackNavigator();

export const Navigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenName.CONFIRM_FORGOT_PASSWORD}>
      <Stack.Screen name={ScreenName.HOME} component={Home} />
      <Stack.Screen name={ScreenName.SIGN_UP} component={SignUp} />
      <Stack.Screen name={ScreenName.SIGN_IN} component={SignIn} />
      <Stack.Screen name={ScreenName.CONFIRM_SIGN_UP} component={ConfirmSignUp} />
      <Stack.Screen name={ScreenName.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ScreenName.CONFIRM_FORGOT_PASSWORD} component={ConfirmForgotPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);
