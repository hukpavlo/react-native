import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenName } from '../../constants';

export type IntroProps = {
  navigation: StackNavigationProp<
    {
      [ScreenName.INTRO]: undefined;
      [ScreenName.LOG_IN]: undefined;
      [ScreenName.SIGN_UP]: undefined;
    },
    ScreenName.INTRO
  >;
};
