import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import styles from './src/styles/appStyles';

import PomodoroButton from './src/components/PomodoroButton';
import BoladenieveSprite from './src/components/BoladenieveSprite';

import { PET_STATES } from './src/utils/petStates';

export default function App() {

  const [petState, setPetState] =
    useState(PET_STATES.IDLE);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Boladenieve 👾❄️
      </Text>

      <Text style={styles.subtitle}>
        Estado actual: {petState}
      </Text>

      <BoladenieveSprite
        petState={petState}
      />

      <PomodoroButton
        title="Idle"
        onPress={() =>
          setPetState(PET_STATES.IDLE)
        }
      />

      <PomodoroButton
        title="Focus"
        onPress={() =>
          setPetState(PET_STATES.FOCUS)
        }
      />

      <PomodoroButton
        title="Talking"
        onPress={() =>
          setPetState(PET_STATES.TALKING)
        }
      />

      <PomodoroButton
        title="Happy"
        onPress={() =>
          setPetState(PET_STATES.HAPPY)
        }
      />

      <StatusBar style="light" />

    </View>
  );
}