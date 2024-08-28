import React from 'react'
import { View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import Ionicons from '@expo/vector-icons/Ionicons';

const Documents = () => {
  return (
    <View>
      <CartePartage 
        title="Gérez vos documents"
        desciption="Conservez tous vos documents de santé dans un endroit sécurisé. Partagez-les avec vos particiens lors de la prise de rendez-vous."
        icon={<Ionicons name="documents" size={80} color="gray" />}
      />
    </View>
  )
}

export default Documents;