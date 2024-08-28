import React from 'react';
import { View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Messages = () => {
  return (
    <View>
      <CartePartage 
        title="Envoyez des demandes"
        desciption="Vous pouvez envoyer à votre particien des demandes spécifiques, sur des resultats d'examen, des courriers d'adressages ou autres."
        icon={<MaterialCommunityIcons name="email-newsletter" size={80} color="gray" />}
      />
    </View>
  )
}

export default Messages;