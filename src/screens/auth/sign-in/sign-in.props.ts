import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../constants';

export type SignInProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.HOME]: undefined;
      [ScreenName.SIGN_IN]: undefined;
      [ScreenName.SIGN_UP]: undefined;
      [ScreenName.FORGOT_PASSWORD]: undefined;
    },
    ScreenName.SIGN_IN
  >;
};
