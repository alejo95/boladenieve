import React from 'react';
import { View, Image } from 'react-native';
import roomStyles from '../styles/roomStyles'; // Importación limpia

const RoomBackground = ({ children }) => {
  return (
    <View style={roomStyles.container}>
      <View style={roomStyles.roomContainer}>
        
        {/* Fondo: La Sala */}
        <Image 
          source={require('../assets/spaces/sala.png')} 
          style={roomStyles.layer} 
        />

        {/* Muebles: El Sofá y Estantería */}
        <Image 
          source={require('../assets/spaces/sofa.png')} 
          style={roomStyles.layer} 
        />

        {/* Personaje: Boladenieve */}
        <View style={roomStyles.characterSlot}>
          {children}
          <View style={roomStyles.shadow} />
        </View>

      </View>
    </View>
  );
};

export default RoomBackground;