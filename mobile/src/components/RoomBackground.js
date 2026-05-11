import { View, Image } from 'react-native';

import roomStyles from '../styles/roomStyles';

import sala from '../assets/spaces/sala.png';
import sofa from '../assets/spaces/sofa.png';

const RoomBackground = ({ children }) => {
  return (
    <View style={roomStyles.container}>

      <View style={roomStyles.roomContainer}>

        {/* Fondo */}
        <Image
          source={sala}
          style={roomStyles.background}
        />

        {/* Sofá */}
        <Image
          source={sofa}
          style={roomStyles.sofa}
        />

        {/* Mascota */}
        <View style={roomStyles.petContainer}>
          {children}
        </View>

      </View>

    </View>
  );
};

export default RoomBackground;