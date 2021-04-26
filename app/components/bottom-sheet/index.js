import { View, Text, Button, useWindowDimensions } from  'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styles from './styles';

const BottomSheet = () => {

  const SPRING_CONFIG = {
    damping: 90,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,                
  };

  const dimensions = useWindowDimensions();
  const top = useSharedValue(
    dimensions.height
  );
  const topAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG)
    };
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if(top.value > dimensions.height / 2 + 200) {
        top.value = dimesions.height;
      } else {
        top.value = dimensions.height /2;
      }
    }
  });

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          title="Open sheet"
          onPress={() => {
            top.value = withSpring(
              dimensions.height / 2,
              SPRING_CONFIG
            )
          }}
        />
      </View>
      <PanGestureHandler
        onGestureEvent={gestureHandler}
      >
        <Animated.View
          style={[
            styles.sheetContainer,
            topAnimatedStyle
          ]}
        >
            <Text>Sheet</Text>
          </Animated.View>
      </PanGestureHandler>
    </>
  )
}

export default BottomSheet;