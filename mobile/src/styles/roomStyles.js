import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = Platform.OS === 'ios' ? height : height - StatusBar.currentHeight;

const roomStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  roomContainer: {
    width: width,
    height: screenHeight,
    position: 'relative',
  },
  layer: {
    position: 'absolute',
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  characterSlot: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
    // Ajustado al 12% para que el personaje toque el suelo de la imagen
    bottom: '12%', 
  },
  shadow: {
    width: 100,
    height: 12,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 50,
    marginTop: -15,
  },
  uiContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  }
});

export default roomStyles;