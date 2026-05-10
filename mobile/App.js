import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './src/styles/appStyles';

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

      <TouchableOpacity
        style={styles.button}
        onPress={completePomodoro}
      >
        <Text style={styles.buttonText}>
          Completar Pomodoro
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}