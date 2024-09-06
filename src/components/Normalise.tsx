import { View, Text, Dimensions, Platform, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 180;
export function pixelNormalize(size: number): number {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {

        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

