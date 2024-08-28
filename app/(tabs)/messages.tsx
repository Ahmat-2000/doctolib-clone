import React from 'react';
import { View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Messages = () => {
  return (
    <View>
      <CartePartage 
        title='Planifiez vos rendez-vous'
        desciption='Trouver un professionnel de la santé et prenez rendez-vous en ligne à tout moment'
        icon={<FontAwesome5 name="calendar-alt" size={80} color="gray" />}
      />
    </View>
  )
}

export default Messages;