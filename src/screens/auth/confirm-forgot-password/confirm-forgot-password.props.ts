import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../constants';

export type ConfirmForgotPasswordProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.SIGN_IN]: undefined;
      [ScreenName.CONFIRM_FORGOT_PASSWORD]: undefined;
    },
    ScreenName.CONFIRM_FORGOT_PASSWORD
  >;
};
