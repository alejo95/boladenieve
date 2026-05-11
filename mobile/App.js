import React, { useState } from 'react';
import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
// Ruta corregida según tu arquitectura src/components
import BoladenieveSprite from './src/components/BoladenieveSprite';

export default function App() {
  const [isTalking, setIsTalking] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* Componente de Boladenieve */}
        <BoladenieveSprite isTalking={isTalking} />

        <View style={styles.buttonContainer}>
          <Button 
            title={isTalking ? "DETENER VOZ" : "PROBAR HABLA"} 
            onPress={() => setIsTalking(!isTalking)} 
            color="#6200EE"
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    width: '80%',
  },
});