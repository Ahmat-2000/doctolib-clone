import React from 'react';
import {Image, View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import { imageBaseStyle } from '../../components/styles';

const RendezVous = () => {
  return (
    <View>
      <CartePartage 
        title='Planifiez vos rendez-vous'
        description='Trouver un professionnel de la santé et prenez rendez-vous en ligne à tout moment.'
        icon={<Image source={require("../../assets/rendezVous.png")} style={imageBaseStyle.image}/>}
      />
    </View>
  )
}

export default RendezVous;