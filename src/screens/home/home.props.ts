import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../constants/navigator';

export type HomeProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.HOME]: undefined;
      [ScreenName.SIGN_IN]: undefined;
      [ScreenName.SIGN_UP]: undefined;
    },
    ScreenName.HOME
  >;
};
