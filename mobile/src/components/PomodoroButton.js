import { TouchableOpacity, Text } from 'react-native';

import styles from '../styles/appStyles';

export default function PomodoroButton(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}