import React from 'react';
import { Image, View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import { globalStyles } from '../../components/styles';

const Messages = () => {
  return (
    <View>
      <CartePartage 
        title="Envoyez des demandes"
        description="Vous pouvez envoyer à votre particien des demandes spécifiques, sur des resultats d'examen, des courriers d'adressages ou autres."
        icon={
        <Image 
          source={require("../../assets/message.png")} 
          alt='icône de message'
          style={globalStyles.cartePartageImage}
        />}
      />
    </View>
  )
}

export default Messages;