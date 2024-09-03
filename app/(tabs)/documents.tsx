import React from 'react'
import { View } from 'react-native';
import CartePartage from '../../components/CartePartage';
import DocumentSvg from '../../assets/svgComponents/DocumentSvg';
const Documents = () => {
  return (
    <View>
      <CartePartage 
        title="Gérez vos documents"
        description="Conservez tous vos documents de santé dans un endroit sécurisé. Partagez-les avec vos praticiens lors de la prise de rendez-vous."
        icon={<DocumentSvg width={80} height={80}/>} 
      />
    </View>
  )
}

export default Documents;
