import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './screens/home';
import { Intro } from './screens/intro';
import { ScreenName } from './constants';
import { LogIn, SignUp, ConfirmSignUp, ForgotPassword, ConfirmForgotPassword } from './screens/auth';

const Stack = createStackNavigator();

export const Navigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName={ScreenName.INTRO}>
      <Stack.Screen name={ScreenName.HOME} component={Home} />
      <Stack.Screen name={ScreenName.INTRO} component={Intro} />
      <Stack.Screen name={ScreenName.LOG_IN} component={LogIn} />
      <Stack.Screen component={SignUp} name={ScreenName.SIGN_UP} />
      <Stack.Screen name={ScreenName.CONFIRM_SIGN_UP} component={ConfirmSignUp} />
      <Stack.Screen name={ScreenName.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ScreenName.CONFIRM_FORGOT_PASSWORD} component={ConfirmForgotPassword} />
    </Stack.Navigator>
  </NavigationContainer>
);
