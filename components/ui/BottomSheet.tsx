import { Animated, Pressable, StyleSheet, View, Dimensions, Modal } from 'react-native';
import React, { PropsWithChildren, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Title from './Title';
import AntDesign from '@expo/vector-icons/AntDesign';

/** BottomSheet props type
  * @prop title - The title of the bottomSheet 
  * @prop height - The height of the bottomSheet, it can be either a number or string like this "50%" 
  * @prop slideTime - The slideTime of the animation in millisecond 
*/
type propsType = {
  title: string,
  height: string | number,
  slideTime: number,
};

/** Ref types for the BottomSheet ref
 * @function openModal : function to open the modal
 * @function closeModal : function to clause the modal
 */
export type BottomSheetRefType  = {
  openModal: () => void;
  closeModal: () => void;
}
/** A nice bottomSheet animated with the default react animated to slide from bottom to the desired height 
  * @prop {title} - The title of the bottomSheet 
  * @prop {height} - The height of the bottomSheet, it can be either a number or string like this "50%" 
  * @prop {slideTime} - The slideTime of the animation in millisecond 
*/
const BottomSheet = forwardRef<BottomSheetRefType,PropsWithChildren<propsType>>(({ title, height, slideTime, children},ref) => {
  const [isVisible,setIsVisible] = useState<boolean>(false);

  const screenHeight : number = Dimensions.get('window').height;
  const heightInPixels : number = typeof height === 'string' && height.includes('%') ? (parseFloat(height) / 100) * screenHeight : Number(height);

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

  const openModal = () =>{
    setIsVisible(true);
    slideIn();
  };

  const closeModal = () => {
    slideDown();
    setTimeout(() => {
      setIsVisible(false);
    }, slideTime);
  };

  useImperativeHandle(ref,() => {
    return {
      openModal : () => openModal(),
      closeModal: () => closeModal(),
    };
  });
  return (
      <Modal 
        visible={isVisible} 
        transparent={true} 
        onRequestClose={closeModal}
      >
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
      </Modal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
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
