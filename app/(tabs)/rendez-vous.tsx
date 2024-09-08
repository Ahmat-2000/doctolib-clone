import React from 'react';
import {Image, View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import { globalStyles } from '../../components/styles';

const RendezVous = () => {
  return (
    <View>
      <CartePartage 
        title='Planifiez vos rendez-vous'
        description='Trouver un professionnel de la santé et prenez rendez-vous en ligne à tout moment.'
        icon={<Image source={require("../../assets/rendezVous.png")} style={globalStyles.cartePartageImage}/>}
      />
    </View>
  )
}

export default RendezVous;