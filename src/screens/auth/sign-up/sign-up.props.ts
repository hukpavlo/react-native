import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../../constants';

export type SignUpProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.SIGN_IN]: undefined;
      [ScreenName.SIGN_UP]: undefined;
    },
    ScreenName.SIGN_UP
  >;
};
