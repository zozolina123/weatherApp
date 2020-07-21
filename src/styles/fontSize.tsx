import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

function normalize(size: number) {
  const newSize = size * scale 
  if(Platform.OS === 'web' && SCREEN_WIDTH > 900) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize/(3)));
  }
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const fontSize = {
    mini: {
      fontSize: normalize(14),
      fontFamily: 'Inter_200ExtraLight'
    },
    small: {
      fontSize: normalize(17),
      fontFamily: 'Inter_300Light'
    },
    medium: {
      fontSize: normalize(19),
      fontFamily: 'Inter_400Regular'
    },
    large: {
      fontSize: normalize(22),
      fontFamily: 'Inter_500Medium'
    },
    xlarge: {
      fontSize: normalize(28),
      fontFamily: 'Inter_800ExtraBold'
    },
  };