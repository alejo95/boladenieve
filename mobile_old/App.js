import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState } from 'react';

import { styles } from './src/styles/appStyles';
import PomodoroButton from './src/components/PomodoroButton';

export default function App() {
  const [pomodoros, setPomodoros] = useState(0);

  function completePomodoro() {
    setPomodoros(pomodoros + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Boladenieve 👾❄️
      </Text>

      <Text style={styles.subtitle}>
        Tu mascota de productividad
      </Text>

      <Text style={styles.counter}>
        Pomodoros completados: {pomodoros}
      </Text>

      <PomodoroButton
        title="Completar Pomodoro"
        onPress={completePomodoro}
      />

      <StatusBar style="light" />
    </View>
  );
}