import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../constants';

export type LogInProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.HOME]: undefined;
      [ScreenName.LOG_IN]: undefined;
      [ScreenName.SIGN_UP]: undefined;
      [ScreenName.FORGOT_PASSWORD]: undefined;
    },
    ScreenName.LOG_IN
  >;
};
