import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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