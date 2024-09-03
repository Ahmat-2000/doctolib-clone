import { useRef } from 'react';
import { Animated } from 'react-native';

type ReturnType = {
  opacityValue: Animated.Value; 
  startAnimation: () => void;
};

type paramType = {
  startOpacity : number,
  endOpacity : number,
};

const useOpacityAnimation = ({startOpacity, endOpacity} : paramType) : ReturnType => {
  const opacityValue = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(opacityValue, {
      toValue: endOpacity,
      duration: 500,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(opacityValue, {
        toValue: startOpacity,
        duration: 500,
        useNativeDriver: true,
      }).start()
    );
  };

  return {
    opacityValue,
    startAnimation,
  };
};

export default useOpacityAnimation;
