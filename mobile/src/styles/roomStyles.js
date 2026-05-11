import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const roomStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  roomContainer: {
    width: width * 0.9,
    height: 300,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  sofa: {
    position: 'absolute',
    bottom: 0,
    width: 250,
    height: 140,
    resizeMode: 'contain',
  },

  petContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
  backgroundColor: '#6c63ff',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 12,
  marginTop: 10,
  width: 220,
  alignItems: 'center',
},

buttonText: {
  color: '#ffffff',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default roomStyles;