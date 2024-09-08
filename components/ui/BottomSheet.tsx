import { Animated, Pressable, StyleSheet, View, Dimensions } from 'react-native';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import Title from './Title';
import AntDesign from '@expo/vector-icons/AntDesign';

/** BottomSheet props type*/
type propsType = {
  /** @prop {title} - The title of the bottomSheet */
  title: string,
  /** @prop {height} - The height of the bottomSheet, it can be either a number or string like this "50%" */
  height: string | number,
  /** @prop {slideTime} - The slideTime of the animation in millisecond */
  slideTime: number,
  /** @prop {isVisible} - The parent state controlling the bottomSheet visibility */
  isVisible : boolean,
  /** @prop {setIsVisible} - The parent setter of the state controlling the bottomSheet visibility */
  setIsVisible: (v : boolean) => void 
};
/** A nice bottomSheet animated to slide from bottom to the desired height */
const BottomSheet : React.FC<PropsWithChildren<propsType>> = ({ title, height, isVisible, setIsVisible, slideTime, children}) => {
  const screenHeight : number = Dimensions.get('window').height;
  const heightInPixels : number | any = typeof height === 'string' && height.includes('%') ? (parseFloat(height) / 100) * screenHeight - 80 : height;

  const slideAnim = useRef(new Animated.Value(heightInPixels )).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: slideTime,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: heightInPixels,
      duration: slideTime,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn();
  }, []);

  const closeModal = () => {
    slideDown();
    setTimeout(() => {
      setIsVisible(false);
    }, slideTime);
  };

  return (
    isVisible && (
      <Pressable style={styles.backDrop} onPress={closeModal}>
        <Pressable style={{ width: '100%', height: heightInPixels }}>
          <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.header}>
              <View style={styles.title}>
                <Title text={title} variant="h4" />
              </View>
              <Pressable onPress={closeModal}>
                <AntDesign name="close" size={30} color="black" style={styles.closeBTN} />
              </Pressable>
            </View>
            <View style={styles.contentBody}>
              {children}
            </View>
          </Animated.View>
        </Pressable>
      </Pressable>
    )
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bottomSheet: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15,
  },
  title: {
    marginHorizontal: 'auto',
  },
  closeBTN: {
    alignSelf: 'center',
  },
  contentBody: {
    flexGrow: 1,
    marginHorizontal: 5,
  },
});
