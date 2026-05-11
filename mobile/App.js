import React, { useState } from 'react';
import { View, Button, StatusBar } from 'react-native';
import BoladenieveSprite from './src/components/BoladenieveSprite';
import RoomBackground from './src/components/RoomBackground';
import roomStyles from './src/styles/roomStyles'; // Importación limpia

export default function App() {
  const [isTalking, setIsTalking] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      
      <RoomBackground>
        <BoladenieveSprite isTalking={isTalking} />
      </RoomBackground>

      <View style={roomStyles.uiContainer}>
        <View style={{ width: '80%' }}>
          <Button 
            title={isTalking ? "DETENER" : "HABLAR"} 
            onPress={() => setIsTalking(!isTalking)} 
            color="#6200EE"
          />
        </View>
      </View>
    </View>
  );
}