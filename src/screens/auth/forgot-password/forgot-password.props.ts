import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../constants';

export type ForgotPasswordProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.SIGN_IN]: undefined;
      [ScreenName.FORGOT_PASSWORD]: undefined;
      [ScreenName.CONFIRM_FORGOT_PASSWORD]: undefined;
    },
    ScreenName.FORGOT_PASSWORD
  >;
};
