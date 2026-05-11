import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const BoladenieveSprite = ({ isTalking }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Intenta con esta ruta si la carpeta 'assets' está pegada al archivo .js
const frames = [
    require('../assets/talk_neutral.png'),
    require('../assets/talking_full.png'),
    require('../assets/talking_medium.png'),

  ];

  useEffect(() => {
    let timer;
    if (isTalking) {
      timer = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % frames.length);
      }, 120);
    } else {
      setCurrentFrame(0);
    }
    return () => clearInterval(timer);
  }, [isTalking]);

  return (
    <View style={styles.container}>
      <Image 
        source={frames[currentFrame]} 
        style={styles.sprite} 
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  sprite: { width: 250, height: 250 },
});

export default BoladenieveSprite;