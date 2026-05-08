import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#cccccc',
  },

  counter: {
    marginTop: 40,
    fontSize: 22,
    color: '#ffffff',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});